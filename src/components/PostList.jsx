import PostItem from "./PostItem";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  margin: 30px;
  padding: 3rem 2rem;
  gap: 2rem;

  display: flex;
  flex-direction: column-reverse; // 최신 글이 위로 오도록
  align-items: center;
`;

export default function PostList ({posts, onPostClick}) {
  return (
    <ListContainer>
      {posts.length === 0 ? (
        <h2>작성된 게시글이 없습니다.</h2>
      ) : (
        posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={() => onPostClick(post)} />
        ))
      )}
    </ListContainer>
  );
}