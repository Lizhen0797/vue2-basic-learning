import VueRouter from 'vue-router'
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyNews from '../pages/MyNews'
import MyMessage from '../pages/MyMessage'
import MyDetail from '../pages/MyDetail'

const router = new VueRouter({
  routes: [
    {
      name: 'about',
      path: '/about',
      component: MyAbout,
      meta: {
        title: '关于',
      },
    },
    {
      name: 'home',
      path: '/home',
      component: MyHome,
      meta: {
        title: '主页',
      },
      children: [
        {
          name: 'news',
          path: 'news',
          component: MyNews,
          meta: {
            isAuth: true,
            title: '新闻',
          },
        },
        {
          name: 'message',
          path: 'message',
          component: MyMessage,
          meta: {
            isAuth: true,
            title: '消息',
          },
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: MyDetail,
              meta: {
                title: '详情',
              },
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
                return { id: $route.query.id, title: $route.query.title }
              },
            },
          ],
        },
      ],
    },
  ],
})

export default router
