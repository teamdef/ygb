import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Search from './Search'

const Header = () => {
  // header Dom class 제어를 위한 ref 선언
  const header = useRef(null);
  /** location 을 이용하여 현재 페이지의 위치를 state로 전달받는다. */
  const location = useLocation();
  useEffect(() => {
    if (location.state == 3) {
      // 3 페이지일 경우 scroll 이벤트에 따라 isScroll 함수 실행
      window.addEventListener("scroll", isScroll);
      // 3 페이지 탈출 시 해당 이벤트리스너 제거
      return () => {
        window.removeEventListener("scroll", isScroll);
      };
    } else {
      // 3 페이지가 아닐 경우 header ref 에 부여된 'scroll' 클래스 제거 (다른 페이지로 이동 시 헤더 display: none 되는 현상 방지)
      header.current.classList.remove("scroll");
    }
  });
  /** 3페이지 스크롤 Header on/off (display:none) 함수*/
  const isScroll = () => {
    if (window.pageYOffset >= 80) {
      header.current.classList.add("scroll");
    } else {
      header.current.classList.remove("scroll");
    }
  };
  return (
    <HeaderEl ref={header}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png"></img>
        </Link>
        <Search/>
      </div>
    </HeaderEl>
  );
};

// styled-components
const HeaderEl = styled.div`
  &.scroll {
    display: none;
  }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
  background-color: #fff;
  border-bottom: 1px solid #e5e5ec;
  padding: 0 12.5%;
  @media screen and (max-width: 480px) {
    padding: 0 4%;
  }
  .container {
    position: relative;
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 80px;
    .logo {
      width: 100px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Header;
