module.exports = {
  "lintOnSave": false,
  "devServer": {
    "port": "3000",
    "open": true,
    "proxy": {
      "/api": {
        "target": "http://localhost:8080",
        "ws": true,
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": "/"
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}