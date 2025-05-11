import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
return (
    <>
        <Header />
        <div>
            <h1>홈페이지</h1>
            <Link to="/post/1">게시글 1</Link>
            <br />
            <Link to="/post/2">게시글 2</Link>
            <br />
            <Link to="/post/3">게시글 3</Link>
        </div>
    </>
);
}