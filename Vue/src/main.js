import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


firebase.initializeApp( {
  apiKey: "AIzaSyCM7vjnXb2rTL-tDp-5Pr90Vj_erQ_wEbQ",
  authDomain: "vue-practics-new.firebaseapp.com",
  projectId: "vue-practics-new",
  storageBucket: "vue-practics-new.appspot.com",
  messagingSenderId: "155223138732",
  appId: "1:155223138732:web:27c04d4bd66e3567f51a09"
});

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }  
})


