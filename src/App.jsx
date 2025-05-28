import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostWritePage from './pages/PostWritePage';
import PostViewPage from './pages/PostViewPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/edit/:id" element={<PostWritePage />} />
        <Route path="/posts/:id" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}