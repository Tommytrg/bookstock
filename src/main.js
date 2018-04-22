// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
// import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
Vue.use(Vuetify)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDG1xIllDd0ERkU9taDKl5cJXkcQp4aeME',
  authDomain: 'bookstore-b666f.firebaseapp.com',
  databaseURL: 'https://bookstore-b666f.firebaseio.com',
  projectId: 'bookstore-b666f',
  storageBucket: 'bookstore-b666f.appspot.com',
  messagingSenderId: '699581817498'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
