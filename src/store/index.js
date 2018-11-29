import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: true,
    products: [],
    categories: [],
    cart: {
      carts: [],
    },
  },
  actions: { // 可做非同步的行為
    updateLoading(context, payload) { // context: vuex 固定參數, payload: 外部傳遞過來的參數
      context.commit('LOADING', payload);
    },
    getProducts(context) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        console.log('取得產品列表:', response);
        context.commit('LOADING', false);
      });
    },
    getCart(context) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false);
      });
    },
    removeCart(context, payload) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${payload}`;
      context.commit('LOADING', true);
      axios.delete(url).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      });
    },
    addtoCart(context, payload) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true);
      const item = {
        product_id: payload.id,
        qty: payload.qty,
      };
      axios.post(url, { data: item }).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      });
    },
  },
  mutations: { // 只做同步的行為
    LOADING(state, payload) {
      state.isLoading = payload;
    },
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
    CART(state, payload) {
      state.cart = payload;
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
});
