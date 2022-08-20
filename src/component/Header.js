import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { regionId } = useParams();
  const [detail, setDetail] = useState(false);
  const isDetail = () => {
    if (regionId != undefined && detail == false) {
      setDetail((current) => !current);
    }
  };
  isDetail();
  return (
    <HeaderEl>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/ygb/logo.png"></img>
        </Link>
      </div>
    </HeaderEl>
  );
};

// styled-components
const HeaderEl = styled.div`
  border-bottom: 1px solid #e5e5ec;
  padding: 0 12.5%;
  @media screen and (max-width: 480px) {
    padding: 0 4%;
  }
  .container {
    position: relative;
    align-items: center;
    display: flex;
    height: 80px;
    .logo {
      width: 100px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Header;
