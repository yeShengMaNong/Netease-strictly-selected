import ajax from './ajax'


export const getIndexDatas = () => ajax({
  url: `/api/navitem`
})


export const getRecommendDatas = () => ajax({
  url:'/api/recommend'
})


export const getReXiao = () => ajax({
  url:'/api/rexiao'
})


export const getNew = () => ajax({
  url:'/api/newdata'
})


export const getLeftNav = () => ajax({
  url:'/api/nav'
})

export const getRight = () => ajax({
  url:'/api/right'
})

//请求搜索数据
export const getsearch = () => ajax({
  method:'POST',
  url:"/foo/xhr/search/init.json"
})


//值得买接口
export const getGoodShop = () => ajax({
  method:'GET',
  url:"/foo/topic/v1/know/navWap.json"
})


//瀑布流数据
export const getBUPU = () => ajax({
  method:'GET',
  url:"/foo/topic/v1/find/recManual.json"
})





