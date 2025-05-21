import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentEdit from "../components/CommentEdit";
import useAuthStore from "../store/authStore";
import PostDetail from "../components/PostDetail";
import axios from "../api/axiosInstance";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Divider = styled.hr`
  width: 100%;
  padding: 2px;
  border: none;
  border-top: 1px solid #ccc;
  margin-bottom: 2rem;
`;

export default function PostViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(''); 
  const { user } = useAuthStore();

  const isOwner = post && user?.id === post.userId;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/660/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    };

    fetchPost();
  }, [id]);

  // 게시글이 없을 경우
  if (!post) {
    return (
      <Container>
        <h1>게시글을 찾을 수 없습니다.</h1>
      </Container>
    );
  }

  // 댓글 작성 시 localStorage에 저장
  const handleCommentSubmit = (comment) => {
    if (comment) {
      const newComment = {
        id: Date.now(),
        content: comment,
      };

      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
      setComment("");
    }
  }

  // 댓글 삭제 시 localStorage에서 삭제
  const handleCommentDelete = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);

    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

    alert("댓글이 삭제되었습니다.");

    setComments(updatedComments);
    
  }

  const handlePostDelete = async () => {
    try {
      await axios.delete(`/660/posts/${post.id}`);
      alert("게시글이 삭제되었습니다.");
      navigate("/");
    } catch (error) {
      alert("게시글 삭제 실패");
    }
  }

  return (
    <Container>
      <PostDetail post={post} isOwner={isOwner} onDelete={handlePostDelete} onEdit = {() => navigate(`/edit/${post.id}`)} />
      <Divider />
      <CommentEdit
        comment={comment}
        setComment={setComment}
        onSubmit={handleCommentSubmit}
      />
      <CommentList comments={comments} onDelete={handleCommentDelete} />
    </Container>
  );
}