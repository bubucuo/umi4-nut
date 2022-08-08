import React, {useEffect, useState} from "react";
// @ts-ignore
import {Link, Outlet} from "umi";

const menus = [
  {to: "/", title: "首页"},
  {to: "/posts/list", title: "博客列表"},
  {to: "/posts/create", title: "新建博客"},
  {to: "/register", title: "注册新用户"},
  // {to: "/login", title: "登录"},
];

export default function Layout() {
  const [user, setUser] = useState<any>();

  async function refresh() {
    try {
      const res = await fetch("/api/user");
      const json = await res.json();

      if (res.status === 200) {
        setUser(json);
      } else {
        setUser(null);
      }
    } catch (err) {}
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="relative">
      <div className="flex">
        {menus.map((menu) => (
          <Link key={menu.to} to={menu.to} className="p-10  hover:shadow-xl ">
            {menu.title}
          </Link>
        ))}

        {user ? (
          <div className="p-10  hover:shadow-xl ">{user.name}</div>
        ) : (
          <Link to={"/login"} className="p-10  hover:shadow-xl ">
            登录
          </Link>
        )}
      </div>

      <div
        className="fixed w-72 bottom-8 right-8 py-4 z-50 flex transition-all
        justify-end flex-col p-4 bg-white shadow hover:shadow-xl rounded">
        <p className="text-right text-xs">
          这个博客是使用 <a href="https://next.umijs.org/zh-CN">Umi.js 框架</a>
          <br />
          搭配 <a href="https://planetscale.com/">PlanetScale</a> +{" "}
          <a href="https://www.prisma.io/">Prisma </a>+
          <a href="https://tailwindcss.com/">Tailwindcss</a> <br />
          并且部署在 <a href="https://vercel.com/">Vercel</a> 的一个示例！
        </p>
      </div>
      <Outlet />
    </div>
  );
}
