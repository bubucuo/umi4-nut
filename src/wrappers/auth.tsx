import React, {useEffect} from "react";
import {Navigate, useLocation, Outlet} from "umi";

export default function RequiredAuth() {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.user) {
    return <Navigate to={"/login"} state={{from: location}} replace={true} />;
  }

  return <Outlet />;
}

const AuthContext = React.createContext();

export function AuthProvider({children}) {
  const [user, setUser] = React.useState(null);

  const signin = async function submit(payload, callback) {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 200) {
        console.error(await res.text());
        return;
      }
      const data = await res.json();
      alert(`欢迎回来，${data.name}`);
      setUser(data);
      callback();
    } catch (err) {
      console.error(err);
    }
  };

  const signout = async function submit(callback: Function) {
    try {
      const res = await fetch("/api/logout");

      if (res.status !== 200) {
        console.error(await res.text());
        return;
      }
      const data = await res.json();
      setUser(null);
      callback();
    } catch (err) {
      console.error(err);
    }
  };

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

  let value = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value} children={children} />;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
