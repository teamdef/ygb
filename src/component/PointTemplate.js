import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Data from "../data.json";

const PointTemplate = (props) => {
  const detail = Data.region[props.id - 1].detail;
  const pointList = detail.map((detail,index) => (
    <Link to={`/${Data.region[props.id - 1].name}/${detail.id}`} className="card" key={detail.id} state={{regionId : props.id - 1,pointId : index}}>
      <img src={detail.image} alt="여행지이미지" />
      <span className="card-title">{detail.name}</span>
    </Link>
  ));
  
  return (<TemplateEl className="Template">{pointList}</TemplateEl>);
};

// styled-components
const TemplateEl = styled.div`
  position: relative;
  display: grid;
  height: 70%;
  background-color: #fff;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(3, 1fr);
  & .card {
    position: relative;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    box-shadow: 2px 4px 4px 2px #999;
    background-color: #a6dbe1;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    & .card-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      text-shadow: 1px 1px 3px #000;
      white-space: nowrap;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
    }
    & .cap {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: default;
      & span {
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;

export default PointTemplate;
