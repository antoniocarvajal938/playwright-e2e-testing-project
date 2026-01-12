import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts'],

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    trace: 'on-first-retry',
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left in the code */
  forbidOnly: !!process.env.CI,

  /* Retry only on CI */
  retries: process.env.CI ? 2 : 0,

  /* Limit workers on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter configuration */
  reporter: 'html',

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Mobile and branded browser projects can be enabled if needed
});
