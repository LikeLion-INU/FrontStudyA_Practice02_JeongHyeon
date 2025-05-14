import styled from "styled-components";
import PostList from "../components/PostList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 60vw;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // 컴포넌트가 마운트될 때 localStorage에서 게시글 데이터를 불러옴
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }
  , []);
  
  // 게시글 클릭 시 해당 게시글의 상세 페이지로 이동
  const handlePostClick = (post) => {
    navigate(`/posts/${post.id}`);
  }

  return (
    <Container>
        <PostList posts={posts} onPostClick={handlePostClick} />
    </Container>
  );
}