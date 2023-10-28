const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer"); 
import * as XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import * as path from 'path';
module.exports = defineConfig({
  e2e: {
    
    // baseUrl: "https://opensource-demo.orangehrmlive.com/",
    baseUrl: "https://conduit.productionready.io", 

    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
      on('task',{
        async convertXlsxToJson(xlsxPath:any){
          const workbook=XLSX.readFile(xlsxPath)
          const worksheet = workbook.Sheets[workbook.SheetNames[0]]
          const jsonData = XLSX.utils.sheet_to_json(worksheet)
          const fileName=path.basename(xlsxPath,'.xlsx')
          const jsonFilePath = `cypress/fixtures/${fileName}.json`
          writeFileSync(jsonFilePath,JSON.stringify(jsonData,null,1))
          return null
        }
      })
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
 downloadsFolder:'cypress/downloads',
    videosFolder: "allure-results/", 
    screenshotOnRunFailure: true, 
    
  },
});
