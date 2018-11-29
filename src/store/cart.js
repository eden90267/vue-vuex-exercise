import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    cart: {
      carts: [],
    },
  },
  actions: { // 可做非同步的行為
    getCart(context) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false, { root: true });
      });
    },
    removeCart(context, payload) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${payload}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false, { root: true });
      });
    },
    addtoCart(context, payload) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const item = {
        product_id: payload.id,
        qty: payload.qty,
      };
      axios.post(url, { data: item }).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  mutations: { // 只做同步的行為
    CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: { // 類似 computed
    cart(state) {
      return state.cart;
    },
  },
};
