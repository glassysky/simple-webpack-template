/**
 * Created by cuitianhao on 16/4/18.
 */
var express = require('express');
var webpack = require('webpack');
var http = require('http');
var proxy = require('http-proxy-middleware');
var config = require('./config');
var webpackConfig = require('./webpack.config');

var port = process.env.PORT || 8000;

var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(context, options));
});

// app.use(require('connect-history-api-fallback'));

app.use(devMiddleware);

app.use(hotMiddleware);

//static sources
app.use('/static', express.static('./static'));

// app.get('/', showFilesMiddleware);

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + port + '\n');
});
