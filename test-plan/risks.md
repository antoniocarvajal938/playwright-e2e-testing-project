# Risks and Mitigation

| Risk | Impact | Mitigation |
|-----|--------|------------|
| Demo environment instability | Tests may fail due to environment issues | Use stable selectors and minimal assertions |
| UI changes without notice | Selectors may break | Centralized selectors in Page Object Model |
| Flaky tests | Reduced confidence in automation | Avoid hard waits and rely on Playwright auto-waiting |
| Over-automation | High maintenance cost | Focus only on critical business flows |
| Test data dependency | Inconsistent results | Use controlled static test data |
