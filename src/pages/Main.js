import React from "react";
import styled from "styled-components";
import Template from "../component/Template";

const Main = () => {
  return (
    <Contents>
      <Template/>
    </Contents>
  );
};

// styled-components
const Contents = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export default Main;
