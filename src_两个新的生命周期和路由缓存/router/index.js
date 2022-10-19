import VueRouter from 'vue-router'
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: MyAbout,
    },
    {
      path: '/home',
      component: MyHome,
      children: [
        {
          path: 'news',
          component: MyNews,
        },
        {
          path: 'message',
          component: MyMessage,
          children: [
            {
              path: 'detail',
              component: MyDetail,
              // props 的三种写法
              // 第一种
              // props: {a:1, b: 'hello'}
              // 第二种 这种方式会就路由中的params 数据以props的方式传递过去
              // props: true
              // 第三种 query
              // props() {
              //   return {id: '666', title: '你好啊'}
              // }
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
            },
          ],
        },
      ],
    },
  ],
})
