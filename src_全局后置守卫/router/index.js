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
//全局 前置路由守卫 初始化的时候被调用以及每次路由切换的时候调用
// router.beforeEach((to, _from, next)=>{
//   //console.log(to, from)

//   if(to.name === 'news' || to.name === 'message') {
//     if (localStorage.getItem('school') === 'lizhen') {
//       next()
//     }
//   } else {
//     next()
//   }
// })

router.beforeEach((to, _from, next) => {
  //console.log(to, from)

  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'lizhen') {
      next()
    }
  } else {
    next()
  }
})
//全局 后置路由守卫 初始化的时候被调用以及每次路由切换后的时候调用
// 没有next
router.afterEach((to, _from) => {
  console.log(_from)
  document.title = to.meta.title || '主页'
})

export default router
