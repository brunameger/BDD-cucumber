const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  defaultCommandTimeout: 5000,

  //normalmente é 10 segundos
  pageLoadTimeout: 10000,

  //especificar tudo que é pra ignorar, se não vc terá muitos arquivos de configuração de js na sua aplicação do Cypress, pq utilizarei cucumber, então não preciso de arquivos como features, e os arquivos de js são justamente definições qu enão preciso. Meus arquivos de teste já terão suas features.
  ignoreTestFiles: ["*.js", "*.md"],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
