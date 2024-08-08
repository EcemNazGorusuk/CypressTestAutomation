const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "szc1qg",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
