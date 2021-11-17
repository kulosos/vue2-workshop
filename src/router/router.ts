import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import {AppRouteNames} from "@/models/AppRouteNames";
import Home from "@/pages/Home.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: AppRouteNames.Home,
        component: Home,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
