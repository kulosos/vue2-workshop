import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

export interface State {
  darkMode: boolean;
}

Vue.use(Vuex);

// persit store using Cookies
Vue.use(VueCookies);
Vue.$cookies.config('7d');
Vue.$cookies.set('darkMode', false);

// persist state using localStorage
const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
});

export default new Vuex.Store<State>({
  state: {
    darkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
  },
  getters: {
    isDarkMode: state => {
      return state.darkMode;
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
