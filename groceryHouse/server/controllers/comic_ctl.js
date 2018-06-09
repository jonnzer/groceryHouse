import comicModel from '../models/comic_model'

const getNewComic = async function (ctx) {
    const result = await comicModel.modelNewComic()
    ctx.body = {
        status: 200,
        msg: 'success',
        data: result
    }
}

export default {
  getNewComic
}
