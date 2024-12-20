import {createRouter, createWebHistory} from 'vue-router'
import ViewLogin from '@/views/login/ViewLogin.vue';
import ViewContent from '@/views/editor/ViewEditor.vue';
import ViewRegister from './views/register/ViewRegister.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: ViewLogin
    },
    {
        path: '/content',
        name: 'content',
        component: ViewContent
    },
    {
        path: '/register',
        name: 'register',
        component: ViewRegister
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;