import React from "react";
import styled from "styled-components";

const SkeletonPoint = ({ length }) => {
  const SkeletonWrap = [];
  for (let i = 0; i < length; i++) {
    SkeletonWrap[i] = (
      <div className="card" key={i}>
        <div className="sklt-point-img"></div>
        <div className="sklt-point-txt">
          <h2 className="sklt-point-title"></h2>
          <p className="sklt-point-desc"></p>
        </div>
      </div>
    );
  }
  return <SkeletonPointEl>
    {SkeletonWrap}
  </SkeletonPointEl>;
};

// styled-components
const SkeletonPointEl = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
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
  
`;

export default SkeletonPoint;
