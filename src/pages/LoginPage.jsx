import axios from "../api/axiosInstance";
import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color:rgb(0, 0, 0);
    outline: none;
  }
  box-sizing: border-box;
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 3.5rem;
  margin: 2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 

  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

const SignUpLink = styled(Link)`
  color:rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpText = styled.div`
  margin-top: 1rem;
  font-size: 0.95rem;
  text-align: center;
`

export default function LoginPage() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const res = await axios.post("/login", {email, password});

      const token = res.data.token;
      const user = res.data.user;

      login({ token, user });
      alert("로그인이 완료되었습니다");
      navigate("/");
    }
    catch (error) {
      if (error.response.status === 400) 
        alert("이메일 또는 비밀번호가 틀렸습니다")
      else 
        alert("로그인 오류")
    }
  }

  return (
    <Container>
      <LoginBox>
        <h1>로그인</h1>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin} disabled={!email || !password}>로그인</LoginButton>
        <SignUpText>계정이 없으신가요?
          <SignUpLink to="/signup">회원가입하러 가기</SignUpLink>
        </SignUpText>
      </LoginBox>
    </Container>
  );
}