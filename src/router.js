import Vue from 'vue';
import Router from 'vue-router';
// import Success from './components/conversion/Success';
import MainPage from './components/MainPage';
// import GlobalStorage from './common/GlobalStorage';
// import * as Constants from './common/Constants';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      components: {"main-page": MainPage}
    },
    
  ]
})
