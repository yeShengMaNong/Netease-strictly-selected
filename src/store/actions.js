import {
  getIndexDatas,
  getRecommendDatas,
  getReXiao,
  getNew,
  getLeftNav,
  getRight,
  getsearch,
  getGoodShop,
  getBUPU
} from '../api'



import {
  GETKINGKONGLIST,
  GETTUIJIANDATA,
  GETLEIMUREXIAOBANG,
  GETNEWPUSH,
  GETNAVS,
  GETRIGHT,
  GETID,
  SEARCH,
  ZHIDEMAI,
  PUBUSHUJU
} from './mutations-type'


export default {
  async getIndex ({commit},callback){
    let res =  await getIndexDatas()
   
    commit(GETKINGKONGLIST,res)
     typeof callback === 'function' && callback()  // 好了  试试
  },

  async getTuiJian ({commit}){
    let res =  await getRecommendDatas()
  
    commit(GETTUIJIANDATA,res)
  },

  async getClassReXiao ({commit}){
    let res = await getReXiao()
    commit(GETLEIMUREXIAOBANG,res)
  },

  async getNewDatas ({commit}){
    let res = await getNew()
    commit(GETNEWPUSH,res)
  },

  async getNav ({commit}){
    let res = await getLeftNav()
    commit(GETNAVS,res)
  },

  async getRightData ({commit}){
    let res = await getRight()
    commit(GETRIGHT,res)
  },


  //返回search数据
  async getsearchData ({commit}){
      let res =  await getsearch()
      if(res.code === '200')
      commit(SEARCH,res.data)
  },

  //值得买网易数据接口
  async getZhiDe ({commit}){
    let res =  await getGoodShop()
   
    // if(res.code === '200')
    commit(ZHIDEMAI,res.data)
  },


  async getPuBu ({commit}){
    let res =  await getBUPU()
    // if(res.code === '200')
    commit(PUBUSHUJU,res.data)
  }
}