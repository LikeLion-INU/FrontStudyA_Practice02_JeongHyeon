import styled from "styled-components";
import useAuthStore from "../store/authStore";

const ItemContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;
  padding: 1.5rem;
  gap: 0.5rem;
  
  display: flex;
  flex-direction: column;

  border: 1px solid #ccc;

  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;  
`;
const Content = styled.div`
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
`;

export default function PostItem({post, onClick}) {

  return (
    <ItemContainer onClick = {() => onClick(post)}>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
    </ItemContainer>
  );
}