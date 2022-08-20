import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Data from "../data.json";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { changeCategory } from "../reducers/categoryReducer";

const Template = () => {
  const region = Data.region;
  const dispatch = useDispatch();
  const regionList = region.map((region, i) =>
    region.open ? (
      <Link
        to={`/${region.name}`}
        className="card"
        key={i}
        onClick={() => {
          dispatch(changeCategory(i));
        }}
      >
        <img src={region.image} alt="여행지이미지" />
        <div className="card-title">
          <span>{region.name}</span>
          <IoIosArrowForward size="20" />
        </div>
      </Link>
    ) : (
      <div className="card not" key={region.id}>
        <img src={region.image} alt="여행지이미지" />
        <div className="card-title">
          <span>Comming Soon</span>
        </div>
      </div>
    )
  );

  return (
    <TemplateEl className="Template">
      <div className="main">
        <div className="container">
          <h2 className="title">어디로 떠나세요?</h2>
          <div className="card-wrap">{regionList}</div>
        </div>
      </div>
    </TemplateEl>
  );
};

// styled-components
const TemplateEl = styled.div`
padding-bottom: 100px;
  // 애니메이션
  @keyframes UP {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  // main (1페이지)
  @media screen and (max-width: 1024px) {
    .main {
      .card-wrap {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-row-gap: 50px;
      }
      .card-title {
        height: 56px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main {
      .card-wrap {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .main {
      padding: 0 4% !important;
      .card-wrap {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  }
  .title {
    position:relative;
    margin-top: 6.25%;
    font-size: 2.8rem;
    margin-bottom: 2.5%;
  }
  .main {
    padding: 0 12.5%;
    .card-wrap {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 2%;
      grid-row-gap: 40px;
    }
    

    .card {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      animation: UP 1s;
      img {
        position: relative;
        width: 100%;
      }
      .card-title {
        position: absolute;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        font-size: 2rem;
        height: 68px;
        bottom: 0;
        color: #fff;
        padding-left: 15%;
      }
      svg {
        margin-left: 10px;
      }
      &.not img {
        filter: blur(4px);
        -webkit-filter: blur(4px);
      }
    }
  }
  // detail (2 페이지)
  .detail {
    .detail-name {
      position:relative;
      display: block;
      overflow: hidden;
      width: 100%;
      height: 200px;
      padding: 0 12.5%;
      .container {
        height: 100%;
        >div {
          position: relative;
          height: 100%;
        }
        img {
          width: 100%;
        }
        h1 {
          position: absolute;
          left: 32px;
          bottom: 32px;
          display: block;
          font-size: 3.6rem;
          color: #fff;
        }
      }
    }
    .detail-main {
      padding: 0 12.5%;
      .card-wrap {
        font-size: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 40px;
        .card {
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 5px 10px 25px 0px #ddd;
          display: flex;
          height: 144px;
          img {
            position:relative;
            width: 40%;
            flex: none;
          }
          .card-txt {
            position:relative;
            display: flex;
            flex-direction: column;
            padding: 5%;
            .card-title {
              position:relative;
              font-size: 2rem;
              margin-bottom: 10%;
            }
            .card-desc {
              font-size: 1.6rem;
              word-break: keep-all;
              color: #767676;
              font-family: 'Pretendard-Regular';
            }
          }
        }
      }
    }
  }
  // detail (1024px)
  @media screen and (max-width: 1024px) {
    .detail-name {
      height:140px !important;
    }
    .detail {
      .detail-main {
        .card-wrap {
          grid-template-columns: repeat(2, 1fr);
          .card {
            height: 126px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .detail-name {
      height:120px !important;
      padding: 0 !important;
    }
    .detail {
      .detail-main {
        padding: 0 4%;
        .card-wrap {
          grid-template-columns: repeat(1, 1fr);
          grid-row-gap: 20px;
          .card {
            height: 110px;
          }
        }
      }
    }
  }
}
`;

export default Template;
