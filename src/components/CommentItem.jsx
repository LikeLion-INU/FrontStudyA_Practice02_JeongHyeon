import styled from "styled-components";
import Button from "./Button";

const ItemContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  display: flex;
  flex-direction: column;
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
`;


const Content = styled.div`
  font-size: 1em;
  line-height: 1.5;
  white-space: pre-line;
`;

export default function CommentItem({ comment, onDelete }) {
  return (
    <ItemContainer>
        <Content>{comment.content}</Content>
        <DeleteWrapper>  
          <DeleteButton onClick={() => onDelete(comment.id)}>삭제</DeleteButton>
        </DeleteWrapper>
    </ItemContainer>
  );
}