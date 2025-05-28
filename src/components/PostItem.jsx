import styled from "styled-components";
import useAuthStore from "../store/authStore";

const ItemContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  padding: 1.5rem;
  gap: 0.5rem;
  
  display: flex;
  flex-direction: column;

  border: 1px solid #ccc;

  cursor: pointer;
`;

const Author = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;  
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(90, 90, 90);
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export default function PostItem({post, onClick}) {
  const { user } = useAuthStore();

  return (
    <ItemContainer onClick = {() => onClick(post)}>
      <Author> 작성자: {post.userName}</Author>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
    </ItemContainer>
  );
}