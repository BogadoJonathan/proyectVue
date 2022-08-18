import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage'

const router = createRouter({
    history: createWebHistory(),
    redirect: '/',
    routes:[
        {
            path:'/',
            name: 'home',
            component: HomePage
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

export default router