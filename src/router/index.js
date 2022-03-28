import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/ListSubscriptions')
        },
        {
            path: '/create',
            name: 'CreateSubscription',
            component: () => import('../components/CreateSubscription')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/EditSubscription')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
