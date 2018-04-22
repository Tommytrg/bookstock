import Vue from 'vue'
import Router from 'vue-router'
import ListCatalog from '@/components/ListCatalog'
import BookList from '@/components/BookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListCatalog',
      component: ListCatalog
    },
    {
      path: '/booklist/:id',
      name: 'BookList',
      component: BookList,
      props: true
    }
  ]
})
