module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/riskmatrix" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
