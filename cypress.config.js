const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'egzh44',
  e2e: {
    baseUrl:"http://lojaebac.ebaconline.art.br/" , 
    setupNodeEvents(on, config) {
      
    },
  },
});
