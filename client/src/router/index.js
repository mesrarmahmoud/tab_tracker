import {createRouter, createWebHistory } from "vue-router"

import Home from '@/components/pages/Home.vue'
import Register from '@/components/pages/Register.vue'
import Login from '@/components/pages/Login.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    {
        path : '/',
        name : "home",
        component : Home
    },
    {
        path : '/register',
        name : "register",
        component : Register
    },
    {
        path : '/login',
        name : "login",
        component : Login
    },
    {
        path : "/:pathMatch(.*)*",
        component : NotFound
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router