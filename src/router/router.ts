import NoteDetail from "@/components/NoteDetail.vue";
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
    },
    {
        path: '/:noteId',
        name: AppRouteNames.Note,
        component: NoteDetail,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
