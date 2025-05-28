import styled from "styled-components";
import Button from "./Button";
import useAuthStore from "../store/authStore";

const PostTitle = styled.h1`
  margin-top: 2rem;
  padding: 1.5rem;
`;

const PostContent = styled.p`
  font-size: 1.2rem;
  color: rgb(90, 90, 90);
  white-space: pre-line;
  line-height: 1.5;
  width: 100%;
  min-height: 50vh;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const PostContainer = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;
  padding: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
`;

export default function PostDetail({ post, onDelete, onEdit }) {
  const { user } = useAuthStore();

  const isAuthor = post && user?.id === post.userId;

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <Wrapper>
        <Author> 작성자: {post.userName}</Author>
        {isAuthor && (
          <ButtonWrapper>
            <EditButton onClick={onEdit}>수정</EditButton>
            <DeleteButton onClick={onDelete}>삭제</DeleteButton>
          </ButtonWrapper>
        )}
      </Wrapper>
      <Divider />
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
}