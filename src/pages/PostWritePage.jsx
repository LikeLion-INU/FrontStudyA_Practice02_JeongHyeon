import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import PostEdit from '../components/PostEdit';


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

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title && content) {
      const newPost = {
        id: Date.now(),
        title,
        content,
      };

      const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

      localStorage.setItem('posts', JSON.stringify([...savedPosts, newPost]));

      alert('게시글 작성이 완료되었습니다.');
      navigate('/');
    }
  }
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
          onClick={handleSubmit}
          disabled={!title || !content}
        >작성 완료</Button>
      </ButtonWrapper>
    </Container>
  );
}