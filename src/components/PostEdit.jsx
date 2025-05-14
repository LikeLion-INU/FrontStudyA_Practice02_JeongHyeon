import styled from 'styled-components';

const TitleInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 20px;
  border: none;
  outline: none; 
`;
const ContentInput = styled.textarea`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  line-height: 1.5;
  height: 50vh;
  border: none;
  outline: none; 
`;

const Divider = styled.hr`
  width: 100%;
  padding: 2px;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0;
`;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default function PostEdit({title, setTitle, content, setContent}) {
  return (
    <Container>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Divider />
      <ContentInput
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </Container>
  );

}
