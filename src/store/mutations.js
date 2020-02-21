import {
  GETKINGKONGLIST,
  GETTUIJIANDATA,
  GETLEIMUREXIAOBANG,
  GETNEWPUSH,
  GETNAVS,
  GETID,
  GETRIGHT,
  SEARCH,
  ZHIDEMAI,
  PUBUSHUJU
} from './mutations-type'


export default {
  [GETKINGKONGLIST] (state,IndexData){
    state.IndexData = IndexData
  },
  [GETTUIJIANDATA] (state,tuijian){
    state.tuidata = tuijian
    state.remdata  = tuijian.bigPromotionModule.floorList
    state.indexActivityModule  = tuijian.indexActivityModule
    // state.categoryList = tuijian.categoryHotSellModule.categoryList
  },

  [GETLEIMUREXIAOBANG] (state,rexiao){
    state.categoryList = rexiao
  },

  [GETNEWPUSH] (state,xp){
    if(xp.length === 6){
      console.log(xp.length)
      state.newItemList = xp
    }
  },


  [GETNAVS] (state,nav){
      state.leftNav = nav
  },

  
  [GETID] (state,needid){
    console.log(needid)
    state.rightId = needid
  },

  [GETRIGHT](state,data){
    // console.log('store',data)
    state.rightData = data
    // let res = data.splice(4,11)
    // if(res.length === 8){
    //   state.rightBottomData = res
    //   console.log('zzz',state.rightBottomData)
    // }
  },


  [SEARCH](state,res){
    state.searchData = res
  },

  [ZHIDEMAI](state,res){
    state.GoodShop = res
  },

  [PUBUSHUJU](state,res){
    state.BupuData = res
  },
  
}