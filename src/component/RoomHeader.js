import React, { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import {TiArrowSortedUp} from "react-icons/ti"
import { Link } from "react-router-dom";

const RoomHeader = (props) => {
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  const [ScrollY, setScrollY] = useState(0);
  const [down, setDown] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setDown(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setDown(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setDown(false); // Down의 값을 false로 바꿈 => 버튼 숨김
  };
  const isActive = (_num) => {
    if (_num == props.type) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <RoomHeaderLayout className={down ? "down" : ""}>
      <Link to="/" className="logo">
        요근방
      </Link>
      <nav>
        <button
          className={isActive(0) ? "active" : ""}
          onClick={() => {
            props.setType(0);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          전체
        </button>
        <button
          className={isActive(1) ? "active" : ""}
          onClick={() => {
            props.setType(1);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          게하
        </button>
        <button
          className={isActive(2) ? "active" : ""}
          onClick={() => {
            props.setType(2);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          펜션
        </button>
        <button
          className={isActive(3) ? "active" : ""}
          onClick={() => {
            props.setType(3);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          호텔
        </button>
        <button
          className={isActive(4) ? "active" : ""}
          onClick={() => {
            props.setType(4);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          독채
        </button>
      </nav>
      <button className="gotop"
        onClick={handleTop}  // 버튼 클릭시 함수 호출
      >TOP<TiArrowSortedUp size="30"/></button>
    </RoomHeaderLayout>
  );
};

// styled-components
const RoomHeaderLayout = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  max-width: 390px;
  text-align: center;
  &.down .gotop {
    opacity: 1;
  }
  &.down .logo{
    display: none;
  }
  &.down button.active{
    border-radius: 0 !important;
  }
  &.down {
    position: fixed;
  }
  .gotop {
    position:fixed;
    left: calc(50% + 120px);
    bottom: 30px;
    z-index: 9999;
    
    width: 50px;
    height: 50px;
    font-size: .5rem;
    color: #fff;
    border: 0;
    font-weight: bold;
    border-radius: 50%;
    background-color: #00baca;
    padding-top:20px;
    opacity: 0;
    transition: opacity .3s;
    svg {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .logo {
    margin: 30px 0;
  }
  background-color: #00baca;

  nav {
    position: relative;
    bottom: 0;
    display: block;
    width: 100%;
    
    margin-bottom: -1px;
    justify-content: space-around;
    display: flex;
    
    button {
      flex-grow: 1;
      font-size: 1.3rem;
      font-weight: bold;
      padding: 10px 0;
      border: 0;
      background-color: transparent;
      color: #fff;
      font-family: 'GangwonEdu_OTFBoldA';
      &.active {
        color: #00baca;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #fff;
      }
    }
  }
`;

export default RoomHeader;
