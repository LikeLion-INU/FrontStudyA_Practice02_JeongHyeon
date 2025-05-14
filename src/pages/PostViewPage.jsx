import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "../components/CommentList";
import CommentEdit from "../components/CommentEdit";
import Button from "../components/Button";

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

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PostContent = styled.p`
  font-size: 16px;
  white-space: pre-line;
  line-height: 1.5;
  width: 100%;
  min-height: 50vh;
`;

const PostContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DeleteButton = styled(Button)`
  background-color:rgb(236, 51, 51);

  &:hover {
    background-color: #94a3b8;
  }
`;

const DeleteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
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

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const foundPost = savedPosts.find((post) => post.id === parseInt(id));
    setPost(foundPost);

    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  if (!post) {
    return (
      <Container>
        <h1>게시글을 찾을 수 없습니다.</h1>
      </Container>
    );
  }

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

  const handleCommentDelete = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  }

  return (
    <Container>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <DeleteWrapper>
          <DeleteButton onClick={() => {
            const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
            const updatedPosts = savedPosts.filter((p) => p.id !== post.id);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            navigate('/');
          }}>글 삭제</DeleteButton>
        </DeleteWrapper>
        <Divider />
        <PostContent>{post.content}</PostContent>
      </PostContainer>
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