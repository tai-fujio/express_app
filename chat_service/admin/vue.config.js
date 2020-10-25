module.exports = {
  devServer: {
    port: 3002,
    disableHostCheck: true,
  },
  lintOnSave: false
  // chainWebpack: (config) => {
  //   config.plugins.delete('fork-ts-checker')
  // }
};
