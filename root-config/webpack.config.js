const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "study";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    target: ["web", "es5"],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "lib"),
          publicPath: "/lib",
        },
        {
          directory: path.join(__dirname, "lib"),
          publicPath: "/dev-lib",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
          timestamp: Date.now(),
        },
      }),
    ],
  });
};
