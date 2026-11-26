# Open Inquiry Initiative

The portal is a buildless HTML and CSS site. The intended public address is https://talos-labs-documents.github.io/.

## GitHub Pages

Publish the public repository as the account site. In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, then enable **Enforce HTTPS**. The empty `.nojekyll` file serves the static files directly. No domain purchase, build dependencies, or repository secrets are required. [Publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

After a change, confirm the Pages deployment succeeded for the expected commit. From a signed-out session, open the HTTPS URL, confirm HTTP redirects to HTTPS, check the page on narrow and wide viewports, and follow the public links. For local preview, run `python -m http.server 8000` from the repository root.

## Editorial maintenance

- Review entries against their original public source and apply the existing publication clearance process before committing updates. Use only cleared material in this public repository and its history.
- Classify artifacts by what the source supports. Record scoped evidence and methods before labeling a result a validated finding.
- Keep historical titles, original publication dates and canonical links. Leave original claims at the source. Describe present-day relationships with their supporting evidence and state when they are thematic.
- Check the archive endpoint with cursor pagination when refreshing the historical index. Compare the collected unique URLs with the displayed entries and verify newly added links anonymously.

## Analytics

**Configuration: disabled.** The portal ships without a visitor analytics script, cookie, or beacon. GitHub Insights measures repository traffic over 14 days. [GitHub traffic documentation](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository)

| Option | Free setup and privacy trade-off |
| --- | --- |
| Hosted GoatCounter | Free for reasonable public use under the provider's terms. Aggregate reporting is the default. No browser storage is used. IP and user-agent combinations may be held in memory for deduplication for up to eight hours. [Terms](https://www.goatcounter.com/help/terms) · [Privacy](https://www.goatcounter.com/help/privacy) |
| Cloudflare Web Analytics | Free with a Cloudflare account. Manual installation uses a site-specific browser beacon and requires no DNS move. Reports audience and performance data. [Setup](https://developers.cloudflare.com/web-analytics/get-started/) · [Data collection](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/) |

If aggregate measurement is adopted, hosted GoatCounter is the simpler fit. Keep individual pageview records and optional dimensions disabled, add the site's own script, disclose the data collection, and verify a controlled visit in the dashboard.
