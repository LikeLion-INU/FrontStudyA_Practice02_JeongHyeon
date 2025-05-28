import { useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const SignupBox = styled.div`
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

const SignupButton = styled(Button)`
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

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await axios.post("/register", { email, password });
      alert("회원가입이 완료되었습니다 ");
      navigate("/");
    } catch (error) {
      if (error.response.status === 409)
        alert("이미 존재하는 이메일입니다 ");
      else
        alert("서버 오류")
    }
  };

  return (
    <Container>
      <SignupBox>
        <h1>회원가입</h1>
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
        <SignupButton onClick={handleSignUp} disabled={!email || !password}>회원가입</SignupButton>
      </SignupBox>
    </Container>
  );
}