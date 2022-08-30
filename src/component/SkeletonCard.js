import React from "react";
import styled from "styled-components";

const SkeletonCard = () => {
  return (
    <SkeletonCardEl>
      <div className="sklt-card-top">
        <button className="sklt-img-btn"></button>
      </div>
      <div className="sklt-card-info">
        <div className="sklt-card-name"></div>
        <div className="sklt-card-check"></div>
        <div className="sklt-card-locate"></div>
        <div className="sklt-price"></div>
      </div>
      <button className="sklt-move"></button>
    </SkeletonCardEl>
  );
};

// styled-components
const SkeletonCardEl = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50%,
    100% {
      transform: translateX(100%);
    }
  }
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #e9e9ed;
  box-shadow: 6px 12px 32px rgba(0, 0, 0, 0.08);
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #e9e9ed 0%, #f9f9fd 30%, #e9e9ed 60%);
    animation: loading 1.5s infinite linear;
  }
  @media screen and (max-width: 1024px) {
    .sklt-card-top {
      height: 218px !important;
    }
    .sklt-card-info {
      padding: 20px !important;
      > div {
        height: 24px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .sklt-card-top {
      height: 200px !important;
    }
    .sklt-card-info {
      padding: 15px !important;
    }
  }
  .sklt-card-top {
    position: relative;
    display: block;
    width: 100%;
    height: 236px;
    flex: none;
    overflow: hidden;
    button {
      position: absolute;
      display: block;
      right: 20px;
      bottom: 16px;
      width: 40px;
      background: #dbdbdb;
      border-radius: 2px;
      height: 40px;
      border: 0;
      z-index: 1;
    }
  }
  .sklt-card-info {
    position: relative;
    display: block;
    flex-grow: 1;
    padding: 24px;
    background-color: #fff;
    > div {
      position: relative;
      z-index: 1;
      background-color: #e9e9ed;
      border-radius: 2px;
      overflow: hidden;
      height: 28px;
    }
    .sklt-card-name {
      width: 24.69%;
      margin-bottom: 4px;
    }
    .sklt-card-check {
      width: 53%;
      margin-bottom: 16px;
    }
    .sklt-card-locate {
      width: 32%;
      margin-left: auto;
      margin-bottom: 14px;
    }
    .sklt-price {
      width: 41.5%;
      margin-left: auto;
    }
  }
  .sklt-move {
    position: relative;
    display: block;
    width: 100%;
    border: 0;
    background-color: transparent;
    height: 56px;
  }
`;

export default SkeletonCard;
