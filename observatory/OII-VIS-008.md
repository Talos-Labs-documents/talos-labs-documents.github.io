# OII-VIS-008 — Browser qualification

JavaScript syntax compilation passed for pinned operations center source at 52e95cac82878707c92078a6d65ead2cfb9db1bd. Public URL retrieval failed in web access and local DNS resolution failed; neither establishes a public outage. Browser harness authored, not executed against actual site. Desktop/mobile runtime, keyboard accessibility, API refresh and deployment remain blocked/unverified.

Run from website checkout: `python -m http.server 8000` in one terminal; in another install Playwright and Chromium and run `python observatory/browser-check.py`. Set OII_URL to deployed observatory URL for hosted check. Preserve output and failures. Do not promote to qualified until checks actually execute.
