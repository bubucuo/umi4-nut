import {useState} from "react";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useNavigate, useLocation, Navigate} from "umi";
import {useAuth} from "@/wrappers/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  if (auth?.user) {
    return <Navigate to={from} />;
  }

  const submit = (e) => {
    auth.signin({email, password}, () => {
      navigate(from, {replace: true});
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container lg:px-64 px-8 pt-16">
        <p className="text-3xl font-extrabold">用户登入</p>
        <div className="mt-8">
          <p>邮箱</p>
          <TextInput value={email} onChange={setEmail} />
          <p className="mt-4">密码</p>
          <TextInput value={password} onChange={setPassword} />
          <Button onClick={submit}>登入</Button>
        </div>
      </div>
    </div>
  );
}
