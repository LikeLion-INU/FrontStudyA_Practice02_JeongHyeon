import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import useAuthStore from '../store/authStore';

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  }

  return (
    <HeaderContainer>
        <Title to="/">Blog</Title>
        <ButtonContainer>
          { user && location.pathname !== '/write' &&
            <Button onClick={() => navigate('/write')}>새 글 작성</Button>
          }
          { user ? (
            <Button onClick={handleLogout}>로그아웃</Button>
          ) : (
            <Button onClick={() => navigate('/login')}>로그인</Button>
          )}
        </ButtonContainer>
    </HeaderContainer>
  );
}