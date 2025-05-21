import styled from "styled-components";
import Button from "./Button";

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
  background-color:rgb(255, 255, 255);
  color: rgb(156, 156, 156);

  &:hover {
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }
`;

const EditButton = styled(Button)`
  background-color: rgb(255, 255, 255);
  color: rgb(156, 156, 156);

  &:hover {
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
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

export default function PostDetail({ post, isOwner, onDelete, onEdit }) {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      {isOwner && (
        <DeleteWrapper>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
          <EditButton onClick={onEdit}>수정</EditButton>
        </DeleteWrapper>
      )}
      <Divider />
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
}