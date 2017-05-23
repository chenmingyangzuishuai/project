require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var navData=require('../src/static/json/navList.json')
var bannerData=require('../src/static/json/banner.json')
var contentData=require('../src/static/json/content.json')
var bed=require('../src/static/json/bed.json')
var meizhuang=require('../src/static/json/meizhuang.json')
var gehu=require('../src/static/json/gehu.json')
var box=require('../src/static/json/box.json')
var jiadian=require('../src/static/json/jiadian.json')
var chufang=require('../src/static/json/chufang.json')
var peishi=require('../src/static/json/peishi.json')
var lingshi=require('../src/static/json/lingshi.json')
var muying=require('../src/static/json/muying.json')
var jiaju=require('../src/static/json/jiaju.json')
var fenlei=require('../src/static/json/fenlei.json')
var pinpai=require('../src/static/json/pinpai.json')
var shop=require('../src/static/json/shop.json')
var apiRoutes=express.Router()
apiRoutes.get('/navlist',function(req,res){
  res.json({
    data : navData
  }
  )
})
apiRoutes.get('/banner',function(req,res){
  res.json({
      data : bannerData
    }
  )
})
apiRoutes.get('/content',function(req,res){
  res.json({
      data : contentData
    }
  )
})
apiRoutes.get('/gehu/3',function(req,res){
  res.json({
      data : bed
    }
  )
})
apiRoutes.get('/gehu/13',function(req,res){
  res.json({
      data : meizhuang
    }
  )
})
apiRoutes.get('/gehu/12',function(req,res){
  res.json({
      data : gehu
    }
  )
})
apiRoutes.get('/gehu/8',function(req,res){
  res.json({
      data : box
    }
  )
})
apiRoutes.get('/gehu/9',function(req,res){
  res.json({
      data : jiadian
    }
  )
})
apiRoutes.get('/gehu/4',function(req,res){
  res.json({
      data : chufang
    }
  )
})
apiRoutes.get('/gehu/11',function(req,res){
  res.json({
      data : peishi
    }
  )
})
apiRoutes.get('/gehu/14',function(req,res){
  res.json({
      data : lingshi
    }
  )
})
apiRoutes.get('/gehu/7',function(req,res){
  res.json({
      data : muying
    }
  )
})
apiRoutes.get('/gehu/5',function(req,res){
  res.json({
      data : jiaju
    }
  )
})
apiRoutes.get('/fenlei',function(req,res){
  res.json({
      data : fenlei
    }
  )
})
apiRoutes.get('/pinpai',function(req,res){
  res.json({
      data : pinpai
    }
  )
})
apiRoutes.get('/shop',function(req,res){
  res.json({
      data : shop
    }
  )
})
app.use('/api',apiRoutes)
var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
