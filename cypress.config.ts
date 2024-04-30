import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
