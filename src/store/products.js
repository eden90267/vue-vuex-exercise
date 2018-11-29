import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
  // state 屬於模組區域變數
  // actions, mutations, getters 是屬於全域變數
  namespaced: true, // actions, mutations, getters 就都會變成區域變數了
  state: {
    products: [],
    categories: [],
  },
  actions: { // 可做非同步的行為
    getProducts(context) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        console.log('取得產品列表:', response);
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  mutations: { // 只做同步的行為
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
  },
  getters: { // 類似 computed
    categories(state) {
      return state.categories;
    },
    products(state) {
      return state.products;
    },
  },
};
