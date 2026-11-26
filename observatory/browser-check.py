"""Run against local checkout or deployed site; pip install playwright; playwright install chromium."""
import os
from playwright.sync_api import sync_playwright
base=os.environ.get("OII_URL","http://127.0.0.1:8000/observatory/")
with sync_playwright() as p:
    browser=p.chromium.launch()
    for width,height in [(1280,800),(390,844)]:
        page=browser.new_page(viewport={"width":width,"height":height})
        errors=[]
        page.on("pageerror",lambda error: errors.append(str(error)))
        response=page.goto(base)
        assert response and response.ok
        page.wait_for_function("document.querySelector('#search-status').textContent.includes('2/2')")
        page.locator("#global-search").fill("OCS")
        assert page.locator("#search-results li").count()>0
        assert page.locator("#telemetry-status").inner_text().startswith("Not connected")
        page.locator('a[href="#history"]').click()
        assert page.url.endswith("#history")
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
        page.route("**/evidence.json",lambda route: route.abort())
        page.reload()
        page.wait_for_function("document.querySelector('#evidence-status').textContent.includes('unavailable')")
        assert not errors,errors
        page.close()
        print(f"PASS {width}x{height}")
    browser.close()
