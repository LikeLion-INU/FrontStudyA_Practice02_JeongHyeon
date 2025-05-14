import styled from "styled-components";
import CommentItem from "./CommentItem";

const ListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export default function CommentList({ comments, onDelete }) {
  return (
    <ListContainer>
      {comments.length === 0 ? (
        <h3>작성된 댓글이 없습니다.</h3>
      ) : (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={onDelete} />
        ))
      )}
    </ListContainer>
  );
}