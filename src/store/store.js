import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import apiConfig from '../../config/api.config'
// axios.defaults.baseURL= apiConfig.baseUrl
Vue.use(Vuex,axios);
export default new Vuex.Store({
  state:{
    count:989,
    name:{name:'jack',age:18},
    freeturndata:'',
    winRecord:'null',
    shoplist:''
  },
  actions:{
    thisdata:function (store,payload) {
      axios.get('v2/book/1220563')
        .then((response) => {
          store.commit('getFreeturnData', response.data)
        })
    },
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
    getFreeturnData:function (state,payload) {
      state.shoplist=payload;
    },
  }
})

