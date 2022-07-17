import React from 'react';
import styled from "styled-components";
import { Link,useParams } from 'react-router-dom';
import Data from '../data.json';

const Template = () => {
    console.log(Data.region[0].id - 1);
    return (
        <TemplateEl className="Template">
            <Link to='/0' className="card">
                <img src={Data.region[0].image} alt="여행지이미지" />
                <span className="card-title">제주도</span>
            </Link>
            <Link to='/404' className="card">
                <img src={Data.region[1].image} alt="여행지이미지" />
                <span className="card-title">부산</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to='/404' className="card">
                <img src={Data.region[2].image} alt="여행지이미지" />
                <span className="card-title">강릉</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to='/404' className="card">
                <img src={Data.region[3].image} alt="여행지이미지" />
                <span className="card-title">속초</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to='/404' className="card">
                <img src={Data.region[4].image} alt="여행지이미지" />
                <span className="card-title">여수</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to='/404' className="card">
                <img src={Data.region[5].image} alt="여행지이미지" />
                <span className="card-title">서울</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
        </TemplateEl>
    )
}




// styled-components 
const TemplateEl = styled.div`
    position: relative;
    display: grid;
    height:70%;
    background-color: #fff;
    grid-template-columns:repeat(2,1fr);
    justify-items: center;
    align-items: center;
    grid-template-rows:repeat(3,1fr);
    & .card {
        position:relative;
        width:150px;
        height:150px;
        border-radius: 20px;
        box-shadow: 2px 4px 4px 2px #999;
        background-color: #000;
        overflow:hidden;
        cursor:pointer;
        img {
            width: 100%;
            height: 100%;
        }
        & .card-title {
            position: absolute;
            text-shadow: 1px 1px 3px #000;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            display: block;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            white-space: nowrap;
        }
        &::before {
            content:'';
            position:absolute;
            top: 0;
            display:block;
            width:100%;
            height:100%;
            background-color:rgba(255,255,255,.3);
        }
        & .cap {
            position:absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color:rgba(0,0,0,.7);
            cursor:default;
            & span {
                position:absolute;
                text-align: center;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: #fff;
                font-size: 1.2rem;
                font-weight: bold;
            }
        }
    }
`


export default Template;