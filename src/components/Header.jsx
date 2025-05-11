import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export default function Header() {
  return (
    <HeaderContainer>
        <Title to="/">Blog</Title>
        <Link to="/write">글 작성</Link>
    </HeaderContainer>
  );
}