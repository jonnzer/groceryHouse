import api_control from '../controllers/movie_ctl.js'
import koaRouter from 'koa-router'
const router = koaRouter()

router.get('/fetchMovie', api_control.getNewMovie)

module.exports = router
