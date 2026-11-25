const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  //moockawsoon report
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Rapport des tests",
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      //repport mockawsoon
      require("cypress-mochawesome-reporter/plugin")(on);
      
      return config
    },
  },
});
