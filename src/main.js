import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

// import VueForm from 'vue-form'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "vue-form"




createApp(App).use(router).use(store).mount('#app')
