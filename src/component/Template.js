import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Data from "../data.json";

const Template = () => {
  const region = Data.region;
  const regionList = region.map((region) =>
    region.open ? (
      <Link
        to={`/${region.name}`}
        className="card"
        state={{ id: region.id }}
        key={region.id}
      >
        <img src={region.image} alt="여행지이미지" />
        <span className="card-title">{region.name}</span>
      </Link>
    ) : (
      <div className="card not" key={region.id}>
        <img src={region.image} alt="여행지이미지" />
      <div className="cap">
        <span>comming soon</span>
      </div>
      </div>
    )
  );
  return <TemplateEl className="Template">{regionList}</TemplateEl>;
};

// styled-components
const TemplateEl = styled.div`
  position: relative;
  display: grid;
  height: 70%;
  background-color: #edfeff;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(3, 1fr);
  & .card {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 2px 4px 4px 2px #999;
    border: 10px solid #00baca;
    background-color: #000;
    overflow: hidden;
    cursor: pointer;
    &.not {
      cursor: default;
    }
    img {
      width: 100%;
      height: 100%;
    }
    & .card-title {
      position: absolute;
      top: 50%;
      font-family: "GangwonEdu_OTFBoldA";
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      color: #fff;
      font-size: 1.7rem;
      font-weight: bold;
      white-space: nowrap;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    & .cap {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .7);
      & span {
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        font-family: "GangwonEdu_OTFBoldA";
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
`;

export default Template;
