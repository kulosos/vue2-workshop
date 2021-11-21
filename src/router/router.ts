import NoteView from "@/components/NoteView.vue";
import { AppRouteNames } from "@/models/AppRouteNames";
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: AppRouteNames.Home,
        component: NoteView,
        redirect: {
            path: '/note'
        }
    },
    {
        path: '/note/',
        name: AppRouteNames.Note,
        component: NoteView,
    },
    {
        path: '/note/:noteId',
        name: AppRouteNames.Note,
        component: NoteView,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
