import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";
import Button from '../components/Button';
import PostEdit from '../components/PostEdit';
import useAuthStore from '../store/authStore';
import axios from "../api/axiosInstance";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export default function PostWritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { id } = useParams();

  // 게시글 작성 완료 버튼 클릭 시 실행되는 함수
  const handleSubmit = async () => {
    try {
      await axios.post("/660/posts", {
        title,
        content,
        userId: user.id,
        userName: user.name,
      });
      alert("작성 완료");
      navigate("/");
    } catch (err) {
      alert("작성 실패");
    }
  }

  // 게시글 수정 버튼
  const handleUpdate = async () => {
    try {
      await axios.put(`/660/posts/${id}`, {
        ...post,
        title,
        content,
      });
      alert("수정 완료");
      navigate(`/posts/${id}`);
    } catch (err) {
      alert("수정 실패");
    }
  };

  return (
    <Container>
      <PostEdit
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
      <ButtonWrapper>
        <Button 
          onClick={id ? handleUpdate : handleSubmit}
          disabled={!title || !content}
        >{id ? "수정 완료" : "작성 완료"}</Button>
      </ButtonWrapper>
    </Container>
  );
} 