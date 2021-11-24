import { AppLayout } from '@/models/AppLayout';
import { State } from '@/models/State';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

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
    layout: AppLayout.List,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleLayout(state) {
      state.layout = state.layout === AppLayout.List ? AppLayout.Grid : AppLayout.List;
    }
  },
  actions: {
  },
  getters: {
    isDarkMode: state => {
      return state.darkMode;
    },
    isListLayout: state => {
      return state.layout === AppLayout.List;
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
