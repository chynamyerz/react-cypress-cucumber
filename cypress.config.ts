import { defineConfig } from "cypress";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import webpackConfig from "./cypress/webpack.config";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    trashAssetsBeforeRuns: true,
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/components/**/*.{js,jsx,ts,tsx}",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig,
    },
  },
});
