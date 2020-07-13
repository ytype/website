const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/shin/Workspace/GitHub/my-gridsome-site/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--second-vue" */ "/home/shin/Workspace/GitHub/my-gridsome-site/src/pages/second.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/shin/Workspace/GitHub/my-gridsome-site/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/shin/Workspace/GitHub/my-gridsome-site/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/shin/Workspace/GitHub/my-gridsome-site/src/templates/Post.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/second/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    path: "/:title/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
