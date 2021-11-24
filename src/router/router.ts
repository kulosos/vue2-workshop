import { AppRouteNames } from "@/models/AppRouteNames";
import Home from "@/pages/Home.vue";
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: AppRouteNames.Home,
        component: Home,
        redirect: {
            path: '/note'
        }
    },
    {
        path: '/note/',
        name: AppRouteNames.Note,
        component: Home,
    },
    {
        path: '/note/:noteId',
        name: AppRouteNames.Note,
        component: Home,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
