import styled from "styled-components";
import PostList from "../components/PostList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axiosInstance";
import useAuthStore from "../store/authStore";

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
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user?.id) return;

    const fetchPosts = async () => {
      try {
        const res = await axios.get("/660/posts");
        setPosts(res.data);
      } catch (err) {
        alert("게시글 목록을 불러오는 데 실패했습니다.");
      }
    };

    fetchPosts();
  }
  , [user, navigate]);
  
  // 게시글 클릭 시 해당 게시글의 상세 페이지로 이동
  const handlePostClick = (post) => {
    navigate(`/posts/${post.id}`);
  }

  return (
    <Container>
      {!user?.id ? (
        <h1>로그인 후 이용해주세요.</h1>
      ) : (
        <PostList posts={posts} onPostClick={handlePostClick} />
      )}
    </Container>
  );
}