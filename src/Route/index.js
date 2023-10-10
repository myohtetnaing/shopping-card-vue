import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Page/Home';
import Cart from '../Page/Cart';
import About from '../Page/About';
import Product from '../Page/Product';

Vue.use(VueRouter);


const routes = [
    {
        path:'/',
        name:'home',
        component:Home,
    },
    {
        path:'/product',
        name:'product',
        component:Product,
    },
    {
        path:'/about',
        name:'about',
        component:About,
    },
    {
        path:'/cart',
        name:'cart',
        component:Cart,
    },
];

const router =new VueRouter({
    mode:'history',
    routes:routes,
})


export default router;