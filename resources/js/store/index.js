import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import example from './modules/example'

export default new Vuex.Store({
    modules: {
        example
    },
    strict: process.env.NODE_ENV !== 'production'
})
