const path = require("path");
module.exports = {
  pages: {
    index: {
      //   entry: "examples/main.js",
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  //扩展webpack配置，使package加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "package"))
      .end()
      .use("label")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  //   pwa: {
  //     iconPaths: {
  //       favicon32: "favicon.ico",
  //       favicon16: "favicon.ico",
  //       appleTouchIcon: "favicon.ico",
  //       maskIcon: "favicon.ico",
  //       msTileImage: "favicon.ico"
  //     }
  //   }
};
