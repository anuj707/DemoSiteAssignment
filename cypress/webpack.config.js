// webpack.config.js

module.exports = {
    // ...
    resolve: {
      alias: {
        DashboardPage: path.resolve(__dirname, '/cypress/page-objects/DashboardPage.js'),
      },
    },
  };
  