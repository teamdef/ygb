import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowRoundUp } from 'react-icons/io'
const GoTop = () => {
  const [scrollY,setScrollY] = useState(0);
  const [down, setDown] = useState(false); // 버튼 상태
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      // 100 이상이면 버튼이 보이게
      return setDown(true);
    } else {
      // 100 이하면 버튼이 사라지게
      return setDown(false);
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
  return (
    <GoTopEl className={down ? 'active':''}>
    <button
      className="gotop"
      onClick={handleTop} // 버튼 클릭시 함수 호출
    >
      <IoIosArrowRoundUp size="30" />
    </button>
  </GoTopEl>
  );
};
// styled-components
const GoTopEl = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 4%;
  right: 4%;
  display: block;
  visibility: hidden;
  &.active {
    visibility:visible;
  }
  button {
    position:relative;
    display:block;
    border: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
    box-shadow: 5px 5px 20px -15px #000;
    opacity: 0;
    transition: .3s;
    svg {
    }
  }
  &.active button {
    opacity: 1;
  }
`;

export default GoTop;
