import Vue from 'vue'
import VueRouter from 'vue-router'

//import HomePage from './pages/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name: 'home',
            component: () => import('./components/FormularioWeb')//HomePage
        },
        {
            path:'/admin',
            name: 'admin',
            component: () => import('./pages/AdminPage')
        },
        {
            path:'/datosForm',
            name: 'datosForm',
            component: () => import('./components/ResultadoForm')
        }

    ]
})