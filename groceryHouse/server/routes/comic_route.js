import api_control from '../controllers/comic_ctl.js'
import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/', api_control.getNewComic)

module.exports = router
