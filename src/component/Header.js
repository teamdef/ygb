import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";

const Header = () => {
  const header = useRef(null);

  /** location 을 이용하여 현재 페이지의 위치를 state로 전달받는다. */
  const location = useLocation();
  // 3페이지 일때만 작동

  useEffect(() => {
    if (location.state == 3) {
      const watch = () => {
        window.addEventListener("scroll", isScroll);
      };
      watch();
      return () => {
        window.removeEventListener("scroll", isScroll);
      };
    }
    else {
      header.current.classList.remove("scroll");
    }
  });
  const isScroll = () => {
    if (window.pageYOffset >= 80) {
      header.current.classList.add("scroll");
    } else {
      header.current.classList.remove("scroll");
    }
  };

  const { regionId } = useParams();
  const [detail, setDetail] = useState(false);
  const isDetail = () => {
    if (regionId != undefined && detail == false) {
      setDetail((current) => !current);
    }
  };
  isDetail();
  return (
    <HeaderEl ref={header}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/logo.png"></img>
        </Link>
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
