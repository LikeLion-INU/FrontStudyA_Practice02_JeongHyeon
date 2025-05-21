import axios from "../api/axiosInstance";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import SignUpPage from "./SignUpPage";

export default function LoginPage() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const navigate = useNavigate();
  
  const handleLogin = async () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const res = await axios.post("/login", {email, password});

      const token = res.data.token;
      const user = res.data.user;

      login({ token, user });
      alert("로그인이 완료되었습니다");
      navigate("/");
    }
    catch (error) {
      alert("로그인 실패");
    }
  }

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={() => navigate("/signup")}>회원가입</button>
    </div>
  );
}