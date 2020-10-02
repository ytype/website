const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/home/shin/workspace/ytype/website/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/home/shin/workspace/ytype/website/src/templates/Project.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/home/shin/workspace/ytype/website/src/templates/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/home/shin/workspace/ytype/website/src/pages/projects.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/home/shin/workspace/ytype/website/src/pages/blog.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/shin/workspace/ytype/website/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/shin/workspace/ytype/website/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/shin/workspace/ytype/website/src/pages/index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/project/:path/",
    component: c2
  },
  {
    path: "/blog/:path/",
    component: c3
  },
  {
    path: "/projects/",
    component: c4
  },
  {
    path: "/blog/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
