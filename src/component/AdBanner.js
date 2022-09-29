import styled from "styled-components";
import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(()=> {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  },[]);
  
  return (
    <AdBannerEl>
      <div className="container">
        <ins
          className="adsbygoogle ad"
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="5506046036"
        ></ins>
      </div>
    </AdBannerEl>
  );
};
const AdBannerEl = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0 12.5%;
  margin-bottom: 8.5%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    min-width: 728px;
    .ad {
      width: 728px;
      height: 90px;
    }
  }
  @media screen and (max-width: 970px) {
    .container {
      min-width: 300px;
      .ad {
        height: 250px;
        width: 300px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0 4%;
  }
`;
export default AdBanner;
