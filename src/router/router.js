import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../discover/AboutPage.vue';

import PageNotFound from "../components/PageNotFound.vue";







const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },

    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];





const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'vue-school-active-link',

});

export default router;
