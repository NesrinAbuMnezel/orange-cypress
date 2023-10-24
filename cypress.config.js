const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer"); 

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config); 
      return config; 
    },
    env: { 
      allureReuseAfterSpec: true, 
      download_dir: "./cypress/downloads", 
      allure: true, 
      allureResulsPath: "allure-results", 
      snapshotOnly: true,
      
    }, 
 
    videosFolder: "allure-results/", 
    screenshotOnRunFailure: true, 
    
  },
});
