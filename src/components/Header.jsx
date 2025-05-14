import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled(Link)`
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
        <Title to="/">Blog</Title>
        { location.pathname !== '/write' &&
          <Button onClick={() => navigate('/write')}>새 글 작성</Button>
        }
    </HeaderContainer>
  );
}