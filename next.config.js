const environment = process.env.NODE_ENV;
const defaults = {
  productionBrowserSourceMaps: true, // enable source maps in production
  sassOptions: {
    includePaths: ["frontend/styles"],
  },
  webpack: (config) => {
    return config;
  },
};

const configs = {
  development: defaults,
  production: defaults,
};

module.exports = environment === "production" ? configs.production : configs.development;
