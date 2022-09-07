/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const { kakao } = window;

const Map = ({ lat, lng, setShowMap }) => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  return (
    <MapViewEl>
      <div className="map-bar">
        <h1>지도</h1>
        <button className="close-btn">
          <GrFormClose
            size="30"
            onClick={() => {
              setShowMap(false);
            }}
          />
        </button>
      </div>
      <div className="map-area">
        <div id="map"></div>
      </div>
    </MapViewEl>
  );
};

const MapViewEl = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: #eee;
  .map-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #e5e5ec;
    padding: 0 12.5%;
    @media screen and (max-width: 480px) {
      padding: 0;
    }
    h1 {
      position:absolute;
      display:block:
      flex:none;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size: 2rem;
    }
    .close-btn {
      position:relative;
      z-index: 1;
      margin-right: 20px;
      border: none;
      background-color: transparent;
      path {
        stroke: #000;
      }
    }
  }
  .map-area {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 12.5%;
    @media screen and (max-width: 480px) {
      padding: 0;
    }
    #map {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;
export default Map;
