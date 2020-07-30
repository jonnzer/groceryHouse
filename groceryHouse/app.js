// koa入口文件
import './env'
import Koa from 'koa'
import koaRouter from 'koa-router'

// import json from 'koa-json'
// import koaBodyparser from 'koa-bodyparser'

const app = new Koa();
const path = require('path')          // nodejs自带
const serve = require('koa-static')   // 引入静态资源服务器
 
// 引入依赖，解决做静态服务器后 SPA路由刷新丢失页面
const historyApiFallback = require('koa-history-api-fallback');  
const router = koaRouter()
import movie_route from './server/routes/movie_route'
import comic_route from './server/routes/comic_route'
let port = process.env.PORT

// app.use(koaBodyparser())
// app.use(json())

app.use(async function (ctx, next) {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s - %s', ctx.method, ctx.url, ms)
})

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

// 根路由中注册子路由
router.use('/movie', movie_route.routes()) // 电影api
router.use('/comic',comic_route.routes())  // 漫画api
router.get('/caidan', function (ctx, next) {
	ctx.body = 'Hello caidan!';
});

// 在app中注册根路由
app.use(router.routes()) 
// app.use(historyApiFallback())
app.use(serve(path.resolve('dist')))      // 将webpack打包好的项目目录作为Koa静态文件服务的目录

export default app.listen(port, () => {
  console.log(`Koa is listening in ${port}`)
})


