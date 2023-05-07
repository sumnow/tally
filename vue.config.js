const Timestamp = new Date().getTime();
const path = require("path");


module.exports = {
    publicPath: "/tally/",
    assetsDir: "./static",
    productionSourceMap: false,
    lintOnSave: true,
    devServer: {
    },
    css: {
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "Tally";
                return args;
            })
    }
};
