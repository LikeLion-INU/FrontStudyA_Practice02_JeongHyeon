import { useState } from 'react';
import Textarea from '../components/Textarea';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
  };

  return (
    <div>
      <h1>글 작성 페이지</h1>
      <Textarea
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="제목을 입력하세요"
        height="20px"
      />
      <Textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="내용을 입력하세요"
        height="200px"
      />
      <button onClick={handleSubmit}>작성 완료</button>
    </div>
  );
}