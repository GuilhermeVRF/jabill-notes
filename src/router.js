import {createRouter, createWebHistory} from 'vue-router'
import ViewLogin from '@/views/login/ViewLogin.vue';
import ViewContent from '@/views/editor/ViewEditor.vue';
import ViewRegister from './views/register/ViewRegister.vue';

function isAuthenticated() {
    return localStorage.getItem('user_token') !== null;
}

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: ViewLogin
    },
    {
        path: '/content/:slug',
        name: 'content',
        component: ViewContent,
        meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !isAuthenticated()){
        window.showPopup('error', 'Usuário não está logado!');   
        next({name : 'login'});
    }else{
        if (to.path !== "/login" && to.path !== "/login") localStorage.setItem("last_visited_page", to.fullPath);
        console.log(to.path);
        next();
    }
})

export default router;