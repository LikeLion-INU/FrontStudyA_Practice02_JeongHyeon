import styled from "styled-components";
import Button from "./Button";
import useAuthStore from "../store/authStore";

const ItemContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled(Button)`
  background-color:rgb(255, 255, 255);
  color: rgb(156, 156, 156);

  &:hover {
    background-color: rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }
`;


const Wrapper = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;

`;

const Author = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;
`;

const Content = styled.div`
  font-size: 1em;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  white-space: pre-line;
`;



export default function CommentItem({ comment, onDelete }) {
  const { user } = useAuthStore();

  const isAuthor = comment && user?.id === comment.userId;
  return (
    <ItemContainer>
        <Wrapper>  
          <Author> 작성자: {comment.userName}</Author>
          {isAuthor && (
            <DeleteButton onClick={() => onDelete(comment.id)}>삭제</DeleteButton>
          )}
        </Wrapper>
        <Content>{comment.content}</Content>
    </ItemContainer>
  );
}