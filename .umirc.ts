export default {
  npmClient: "pnpm",
  routes: [
    { exact: true, path: "/", component: "index" },
    { exact: true, path: "/login", component: "/login" },
    {
      exact: true,
      path: "/user",
      component: "/user",
      wrappers: ["@/wrappers/auth"],
    },
    { exact: true, path: "/posts/:postId", component: "/posts/[postId]" },
    { path: "*", component: "404" },
  ],
};
