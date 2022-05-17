import { useNavigate } from "umi";
import { useAuth } from "@/wrappers/auth";

export default function User(props) {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User</h1>
      <p>{auth.user?.username}</p>
      <button
        onClick={() => {
          auth.signout(() => navigate("/login"));
        }}
      >
        退出登录
      </button>
    </div>
  );
}
