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
  justify-content: space-between;
  margin-top: 1rem;
`;

const BackButton = styled(Button)`
  background-color: rgb(126, 126, 126);
  &:hover {
    background-color:rgb(94, 94, 94);
  }
`;

export default function PostWritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const res = await axios.get(`/660/posts/${id}`);
          setTitle(res.data.title);
          setContent(res.data.content);
        } catch (err) {
          alert("게시글 정보를 불러오는 데 실패했습니다.");
        }
      };
      fetchPost();
    }
    else {
      // 새 글 작성인 경우 상태 초기화
      setTitle('');
      setContent('');
    }
  }, [id]);

  // 게시글 작성 완료 버튼 클릭 시 실행되는 함수
  const handleSubmit = async () => {
    try {
      await axios.post("/660/posts", {
        title,
        content,
        userId: user.id,
        userName: user.name,
      });
      alert("게시글 작성이 완료되었습니다");
      navigate("/");
      console.log("복호화된 유저:", user);
    } catch (err) {
      alert("작성 실패");
    }
  }

  // 게시글 수정 버튼
  const handleUpdate = async () => {
    try {
      await axios.put(`/660/posts/${id}`, {
        title,
        content,
      });
      alert("게시글 수정이 완료되었습니다");
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
        <BackButton onClick = {() => navigate(-1)}>뒤로 가기</BackButton>
        <Button 
          onClick={id ? handleUpdate : handleSubmit}
          disabled={!title || !content}
        >{id ? "수정 완료" : "작성 완료"}</Button>
      </ButtonWrapper>
    </Container>
  );
} 