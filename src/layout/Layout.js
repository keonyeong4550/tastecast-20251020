import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Layout.css"; // CSS 파일 import
import { useDarkMode } from "../DarkModeContext";
import React from "react";

// 25/10/27 1:59 한해찬 수정
// Dark Mode 적용
const Layout = ({ onReload }) => {
  // 25/10/17 14:55 한해찬 수정
  // 다크 모드 추가
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // 25/10/17 11:07 한해찬 수정
  // Link를 클릭했을 때 Home.js의 데이터만 초기화 (React 내부 새로고침)

  const navigate = useNavigate();

  // ✅ 25/10/19 한해찬 수정
  // Home.js 내부 상태 초기화 요청 함수 실행
  const handleReloadHome = (e) => {
    e.preventDefault();
    navigate("/"); // 홈 화면으로 이동
    if (onReload) {
      onReload(); // 상위(App.js 등)에서 전달된 상태 초기화 함수 실행
    }
  };

  return (
    // 최상위 dvi에 dark 클래스 적용
    <div className={`layout ${isDarkMode ? "dark" : ""}`}>
      <header className="header">
        <div className="header-top">
          <Link to="/" className="title" onClick={handleReloadHome}>
            오늘 뭐 먹지?{" "}
            <span
              role="img"
              aria-label="meal"
              className="meal-icon"
              onClick={handleReloadHome}
            >
              🍽️
            </span>
          </Link>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">
            오늘의 추천
          </Link>
          <Link to="/recipes" className="nav-link">
            전체 레시피
          </Link>
          <Link to="/recipecreate" className="nav-link">
            레시피 추가
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
