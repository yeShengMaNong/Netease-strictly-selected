let Koa = require('koa')
let KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

let navDatas  = require('./datas/indexCateModule.json')
let RecommendDatas = require('./datas/index.json')
let res = RecommendDatas.newItemList.splice(0,6)
let leftnav = require('./datas/cateNavDatas.json')
let right = require('./datas/cateLists.json')

//home nav导航数据
router.get('/navitem',(ctx,next) => {
  
 ctx.body = navDatas
})
//返回home 推荐对应的数据
router.get('/recommend', (ctx,next) => {
  ctx.body = RecommendDatas
})

//返回热销data
router.get('/rexiao', (ctx,next) => {
  ctx.body = RecommendDatas.categoryHotSellModule.categoryList
  
})

//返回新品数据
router.get('/newdata', (ctx,next) => {

    // ctx.body = RecommendDatas.newItemList.splice(0,6)
    if(res.length === 6){
      ctx.body = res
    }
})



//返回 分类左侧nav

router.get('/nav', (ctx,next) => {

  ctx.body = leftnav.categoryL1List
})


router.get('/right', (ctx,next) => {

  ctx.body = right
})

// router.post('https://m.you.163.com/xhr/search/init.json', (ctx,next) => {

//   console.log(ctx,next)
// })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3000',() => {
  console.log('服务器地址:3000启动中...')
})