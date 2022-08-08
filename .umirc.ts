export default {
  npmClient: "pnpm",
  apiRoute: {
    platform: "vercel",
  },

  // routes: [
  //   {
  //     path: "/",
  //     component: "@/layouts/index",
  routes: [
    {exact: true, path: "/", component: "index"},
    {
      exact: true,
      path: "/posts/create",
      component: "posts/create",
      wrappers: ["@/wrappers/auth"],
    },
    {exact: true, path: "/posts/:postId", component: "posts/post"},
    {exact: true, path: "/posts/list", component: "posts/list"},
    {
      exact: true,
      path: "/user",
      component: "user/user",
      wrappers: ["@/wrappers/auth"],
    },

    {exact: true, path: "/login", component: "user/login"},
    {exact: true, path: "/user/register", component: "user/register"},

    {path: "*", component: "_404"},
  ],
  // },
  // ],

  plugins: [require.resolve("@umijs/plugins/dist/tailwindcss")],
  tailwindcss: {},
};
