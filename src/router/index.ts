import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import QuoteList from '@/views/QuoteList.vue'
import QuoteView from '@/views/QuoteView.vue'
import QuoteCreate from '@/views/QuoteCreate.vue'
import RandomQuote from '@/views/RandomQuote.vue'
import QuoteEdit from '@/views/QuoteEdit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quotes',
    name: 'QuoteList',
    component: QuoteList
  },
  {
    path: '/quotes/create',
    name: 'QuoteCreate',
    component: QuoteCreate
  },
  {
    path: '/quotes/:id',
    name: 'QuoteView',
    component: QuoteView
  },
  {
    path: '/quotes/edit/:id',
    name: 'QuoteEdit',
    component: QuoteEdit
  },
  {
    path: '/random',
    name: 'RandomQuote',
    component: RandomQuote
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router, routes }
