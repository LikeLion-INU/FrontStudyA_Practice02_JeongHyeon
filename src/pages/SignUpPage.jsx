import { useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password ) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      await axios.post("/register", { email, password });
      alert("회원가입이 완료되었습니다");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
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
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}