const withStyles = require("@webdeb/next-styles");
const dotEnv = require("dotenv").config();
const webpack = require("webpack");
const dotEnvWebpack = require("dotenv-webpack");

const environment = process.env.NODE_ENV;
const defaults = {
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["frontend/styles"], // @import 'variables'; # loads (frontend/styles/variables.scss), you got it..
    },
  },
  env: {
    GITHUB_ENDPOINT: process.env.GITHUB_ENDPOINT,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new dotEnvWebpack({ silent: true }));

    return config;
  },
};

const configs = {
  development: {
    ...defaults,
    webpack: defaults.webpack,
  },
  production: {
    ...defaults,
    webpack: defaults.webpack,
  },
};

module.exports = withStyles(
  environment === "production" ? configs.production : configs.development
);
