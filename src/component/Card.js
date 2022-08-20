import React, { useState } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BiImages } from "react-icons/bi";

import MapView from "../pages/MapView";
import PhotoView from "./PhotoView";

const Card = ({ item, count_5m, count_10m, count_15m }) => {
  const [showMap, setShowMap] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const isShowMap = () => {
    setShowMap(true);
  };
  const isShowImg = () => {
    setShowImg(true);
  };
  // 정수형 -> 문자열 변환 후 문자 사이 : 추가 ex) 10:10
  const time = (_num) => {
    if (_num != null) {
      let time = String(_num).replace(/(.{2})/, "$1:");
      return time;
    } else {
      return "없음";
    }
  };
  const price = (_price) => {
    if (_price == null) return "가격 정보 없음";
    else return `${_price.toLocaleString("ko-KR")} 원 ~`;
  };
  return (
    <CardEl>
      {/* <span id="time">
        도보
        <em style={{ fontStyle: "normal", color: "red" }}> {item.time} </em>
        분 내 위치
        <BiWalk size="25" color="#000" />
      </span> */}
      {count_5m ? (
        <h1>
          도보 <span>5</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      {count_10m ? (
        <h1>
          도보 <span>10</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      {count_15m ? (
        <h1>
          도보 <span>15</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      <div className="info">
        <div className="info-left">
          <img src={item.image[0]} alt="thumbnail" onClick={isShowImg} />
          <BiImages size="30" color="#ccc" onClick={isShowImg} />
          <div className="check-time">
            <span className="tag">체크인</span>
            <span>{time(item.checkin)}</span>
          </div>
          <div className="check-time">
            <span className="tag">체크아웃</span>
            <span>{time(item.checkout)}</span>
          </div>
        </div>
        <div className="info-right">
          <strong id="name">{item.name}</strong>
          <button className="locate" onClick={isShowMap}>
            <HiLocationMarker />
            상세 위치 보기
            {/* 도보 {item.time} 분 도착 */}
          </button>
          {showMap ? (
            <MapView setShowMap={setShowMap} lat={item.lat} lng={item.lng} />
          ) : null}
          {showImg ? <PhotoView setShowImg={setShowImg} item={item} /> : null}
          <span className="price">
            <span
              className="tag"
            >
              최저가
            </span>
            <em style={{ fontStyle: "normal" }}>{price(item.price)}</em>{" "}
          </span>
          <button
            className="move"
            onClick={() => window.open(item.url, "_blank")}
          >
            실시간 가격 보기
          </button>
        </div>
      </div>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  
`;

export default Card;
