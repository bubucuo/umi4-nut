import React from "react";
import { Link, Outlet } from "umi";
import { AuthProvider } from "@/wrappers/auth";
import styles from "./index.less";

export default function Layout() {
  return (
    <AuthProvider>
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts/123">post</Link>
          </li>
          <li>
            <Link to="/user">用户中心</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </AuthProvider>
  );
}
