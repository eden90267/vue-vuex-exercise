import Vue from 'vue';
import Vuex from 'vuex';

import loadingModules from './loading';
import productsModules from './products';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    loadingModules,
    productsModules,
    cartModules,
  },
});
