import React from "react";
import styled from "styled-components";

// const price = () => {} 단위 반점 구현 예정
const Card = (props) => {
  return (
    <CardEl>
      <div className="info">
        <img src="#" alt="숙소 이미지" />
        <div className="text">
          <strong>{props.item.name}</strong>
          <span className="locate">상세 위치 보기</span>
          <span className="price">
            <em>{props.item.price}</em> 원 ~
          </span>
        </div>
      </div>
      <button
        className="move"
        onClick={() =>
          window.open(props.item.url, "_blank")
        }
      >
        최저가 비교하기
      </button>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  position: relative;
  padding: 10% 0;
  border-bottom: 1px solid #999;
  .info {
    display: flex;
    margin-bottom: 10%;
    img {
      margin-right: 10%;
      width: 130px;
      border-radius: 5px;
      background-color: #ccc;
      height: 130px;
    }
    .text {
      flex-grow: 1;
      font-weight: bold;
      strong {
        margin-bottom: 20%;
        font-size: 1.5rem;
        display: block;
      }
      .locate {
        display: block;
        margin-bottom: 10%;
        font-size: 0.8rem;
        color: #ccc;
      }
      .price {
        display: block;
        font-size: 1.3rem;
        text-align: right;
      }
    }
  }
  .move {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background-color: #a6dbe1;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export default Card;
