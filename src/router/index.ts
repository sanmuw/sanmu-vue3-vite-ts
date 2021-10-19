import {
    createRouter, createWebHashHistory, RouteRecordRaw,
} from 'vue-router';
import { store } from '@/store';
import layout from '../views/layout/index.vue';

export const constantRoutes: Array<RouteRecordRaw> = [

    {
        path: '/',
        redirect: '/projectReport',
        meta: {
            hidden: true,
            hiddenTab: true,
        },
    },
    {
        path: '/projectReport',
        component: layout,
        redirect:'/projectReport/qualityReport',
        meta:{
            title:  '项目报告',
            icon: 'el-icon-data-analysis'
        },
        children:[
            {
                path: '/projectReport/qualityReport',
                name:'qualityReport',
                component: () => import(/* webpackChunkName: "qualityReport" */ '@/views/ProjectReport/qualityReport.vue'),
                meta:{
                    title: '质量报告',
                }, 
            },
            {
                path: '/projectReport/testCase',
                name:'testCase',
                component: () => import(/* webpackChunkName: "testCase" */ '@/views/ProjectReport/testCase.vue'),
                meta:{
                    title: '测试用例',
                }, 
            },
            {
                path: '/projectReport/testReport',
                name:'testReport',
                component: () => import(/* webpackChunkName: "testReport" */ '@/views/ProjectReport/testReport.vue'),
                meta:{
                    title: '测试报告',
                }, 
            }
        ]
    },
    {
        path: '/codeCoverage',
        component: layout,
        redirect:'/codeCoverage/codeCoverageRate',
        meta:{
            title: '代码覆盖率',
            icon: 'el-icon-data-analysis'
        },
        children:[
            {
                path: '/codeCoverage/codeCoverageRate',
                name:'codeCoverageRate',
                component: () => import(/* webpackChunkName: "codeCoverageRate" */ '@/views/CodeCoverage/index.vue'),
                meta:{
                    title: '代码覆盖率',
                }, 
            },
            {
                path: '/codeCoverage/codeCoverageRate2',
                name:'codeCoverageRate2',
                component: () => import(/* webpackChunkName: "codeCoverageRate" */ '@/views/CodeCoverage/index.vue'),
                meta:{
                    title: '代码覆盖率2',
                }, 
            }
        ]
    },
    {
        path: '/liftSystem',
        component: layout,
        redirect:'/liftSystem/sponsor',
        meta:{
            title: '提测系统',
            icon: 'el-icon-data-analysis'
        },
        children:[
            {
                path: '/liftSystem/sponsor',
                name:'sponsor',
                component: () => import(/* webpackChunkName: "sponsor" */ '@/views/LiftSystem/sponsor.vue'),
                meta:{
                    title: '发起提测',
                }, 
            },
            {
                path: '/liftSystem/liftList',
                name:'liftList',
                component: () => import(/* webpackChunkName: "liftList" */ '@/views/LiftSystem/liftList.vue'),
                meta:{
                    title: '提测列表',
                }, 
            },
            {
                path: '/liftSystem/myLift',
                name:'myLift',
                component: () => import(/* webpackChunkName: "myLift" */ '@/views/LiftSystem/myLift.vue'),
                meta:{
                    title: '我的提测',
                }, 
            },
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index.vue'),
        meta: {
            title: '登录',
            hidden: true,
            hiddenTab: true,
        },
    },
    {
        path: '/noFound',
        name: 'NoFound',
        component: () => import(/* webpackChunkName: "noFound" */ '@/views/404.vue'),
        meta: {
            title: '404',
            hidden: true,
            hiddenTab: true,
        },
    },
    {
        path: '/:pathMatch(.*)*', name: 'not-found', component: () => import(/* webpackChunkName: "noFound" */ '@/views/404.vue'),
        meta: {
            title: '未找到',
            hidden: true,
            hiddenTab: true,
        },
    },
];

export const asyncRoutes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

router.beforeEach((to, from, next) => {
    // 判断当前路由中是否已经入栈
    if (sessionStorage.getItem('auth')) {
        next();
    } else if (to.path === '/login') {
        console.log("/login");
        next();
    } else {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }


});

export default router;