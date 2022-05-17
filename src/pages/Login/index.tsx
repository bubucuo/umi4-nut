import { useNavigate, useLocation, Navigate } from "umi";
import { useAuth } from "@/wrappers/auth";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  if (auth.user) {
    return <Navigate to={from} />;
  }

  const submit = (e) => {
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    auth.signin({ username }, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
