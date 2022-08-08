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
    {exact: true, path: "/posts/create", component: "posts/create"},
    {exact: true, path: "/login", component: "login"},
    {exact: true, path: "/register", component: "register"},
    {exact: true, path: "/posts/:postId", component: "posts/post"},
    {exact: true, path: "/posts/list", component: "posts/list"},
  ],
  // },
  // ],

  plugins: [require.resolve("@umijs/plugins/dist/tailwindcss")],
  tailwindcss: {},
};
