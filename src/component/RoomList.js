import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { TiWarningOutline } from "react-icons/ti";
import {TiArrowSortedUp} from "react-icons/ti"
import { useSelector } from "react-redux";

const RoomList = () => {
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
    if (_num == type) {
      return true;
    } else {
      return false;
    }
  };
  
  const [type, setType] = useState(0); // 숙박시설의 종류 (게하,모텔,호텔 등)
  const { detail } = useSelector(state => state.detail); // 여행지 상세한 정보 불러오기
  let items = detail.items; // 숙박시설정보 배열
  let open = true; // 해당 여행지 숙소 정보 등록 유무

  if (type !== 0) {
    items = items.filter((item) => item.type === type);
  }
  // 숙소 전체목록이 0개 일 시 준비 중
  else if (type == 0 && items.length == 0) {
    open = false;
  }
  items = items.sort(function (a, b) {
    return parseFloat(a.time) - parseFloat(b.time);
  });

  // 숙박시설정보 배열을 도보 거리순으로 정렬 5 > 10 > 15
  const count_5m = items.findIndex((item) => item.time <= 5);
  const count_10m = items.findIndex((item) => item.time >= 10);
  const count_15m = items.findIndex((item) => item.time >= 15);

  const itemList = items.map((item, index) => (
    <Card
      item={item}
      key={index}
      count_5m={index == count_5m}
      count_10m={index == count_10m}
      count_15m={index == count_15m}
    />
  ));
  return (
    <RoomListLayout>
      <nav>
        <button
          className={isActive(0) ? "active" : ""}
          onClick={() => {
            setType(0);
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
            setType(1);
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
            setType(2);
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
            setType(3);
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
            setType(4);
            window.scrollTo({
              top: 0,
            });
            setScrollY(0);
          }}
        >
          모텔
        </button>
      </nav>
      <button className="gotop"
        onClick={handleTop}  // 버튼 클릭시 함수 호출
      >TOP<TiArrowSortedUp size="30"/></button>
      {open ? (
        itemList.length != 0 ? (
          itemList
        ) : (
          <div className="empty">
            <TiWarningOutline size="100" color="#aaa" />
            <span>근방에 존재하는 숙소가 없습니다</span>
          </div>
        )
      ) : (
        <div className="empty">
        <TiWarningOutline size="100" color="#aaa" />
        <span>준비 중 입니다 !</span>
      </div>
      )}
    </RoomListLayout>
  );
};

// styled-components
const RoomListLayout = styled.div`
  
`;

export default RoomList;
