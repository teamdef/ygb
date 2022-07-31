/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import {GrClose} from "react-icons/gr"

const { kakao } = window;

const Map = ({ lat, lng, setShowMap }) => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
    console.log(lat);
    console.log(lng);
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
      <div id="bg" onClick={() => {setShowMap(false)}}></div>
      <div className="map-area">
        <div id="map"></div>
        <GrClose onClick={() => {setShowMap(false)}}/>
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
  z-index: 999;
  .map-area {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: block;
    border: 5px solid #A6DBE1;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    svg {
      position: absolute;
      z-index: 1;      
      bottom: -30%;
      right: 50%;
      transform:translateX(50%);
      height: 1.5rem;
      width: 1.5rem;
      path {
        stroke: white;
      }
    }
    #map {
      width: 100%;
      border-radius: 50%;
      height: 100%;
    }
  }
  
  #bg {
      position:relative;
      display:block;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
  }
`
export default Map;
