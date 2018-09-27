import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getter'
// import * as actions from './actions'
Vue.use(Vuex)
// const state = {
//     count : 4
// }

// const mutations = {
//     add(state,n){
//         alert(n)
//         state.count +=n;
//     },
//     sub(state){
//         state.count--;
//     }
// }

// const getters = {
//     count: state => {
//         return state.count
//     }
// }

const store = new Vuex.Store({
    state,
    mutations,
    getters
})

export default store