import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Content = styled.textarea`
  width: 100%;
  padding: 1em;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #ccc;
  outline: none;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export default function CommentEdit({ comment, setComment, onSubmit }) {
  return (
    <Container>
      <Content
        placeholder="댓글을 입력하세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <ButtonWrapper>
        <Button 
          onClick={() => onSubmit(comment)}
          disabled={!comment}
          >작성 완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
}