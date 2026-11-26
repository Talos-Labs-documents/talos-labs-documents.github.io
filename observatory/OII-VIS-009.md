# OII-VIS-009

Executed adapter logic from fetched GitHub source in a JavaScript isolate, removing only export keywords to expose functions. Used actual committed JSON fixtures and injected mock fetch. This is not execution of the Node test file or live network/browser qualification.

- valid evidence: FAIL Error: Invalid evidence
- valid publications: FAIL Error: Invalid catalog
- valid telemetry: PASS
- unknown worker count: PASS
- unsupported schema: PASS
- duplicate publication: PASS
- unexpected telemetry: PASS
- valid fetch: FAIL Error: assertion
- offline: PASS
- partial failure: FAIL Error: assertion

Reality OS runtime integration remains pending.

## Environment diagnosis
The isolate has no URL, AbortSignal or fetch globals. Four failed checks are environment-blocked; offline and rejection passes may be vacuous where those missing globals cause early rejection. Do not interpret this run as adapter qualification. Run the unchanged ES module test in Node 20+ before making code changes. No adapter defect established.
