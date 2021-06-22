import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import luRouter from './lu'

const routes = [
    movieRouter,
    cinemaRouter,
    mineRouter,
    luRouter,
    {
        path: '',
        redirect: '/movie'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router