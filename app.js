const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(
    createProxyMiddleware("/", {
      protocolRewrite: true,
      secure: false,
      changeOrigin: true,
      target: "https://api.kth.se",
      onProxyReq(proxyReq, req, res) {
        console.log("-------------------------------------")
        console.log(req.method)
        console.log("url:" + JSON.stringify(req.url))
        console.log("headers:" + JSON.stringify(req.headers))
        console.log("query:" + JSON.stringify(req.query))
        console.log("params:" + JSON.stringify(req.params))
        console.log("====================================")
        console.log()
      },
    })
);
app.listen(80);