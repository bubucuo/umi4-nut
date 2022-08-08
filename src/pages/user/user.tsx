import {useNavigate} from "umi";
import {useAuth} from "@/wrappers/auth";
import Button from "@/components/Button";

export default function User() {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center flex-wrap items-center">
      <p>{auth.user.name}</p>
      <Button
        onClick={() => {
          auth.signout(() => navigate("/login"));
        }}>
        退出登录
      </Button>
    </div>
  );
}
