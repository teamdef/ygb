import React from 'react';
import styled from "styled-components";
import { Link,useParams } from 'react-router-dom';
import Data from '../data.json';
const PointTemplate = () => {
    const { regionId } = useParams();
    
    return (
        <TemplateEl className="Template">
            <Link to={`/room/${Data.region[regionId].detail[0].id}`} className="card">
                <img src={Data.region[regionId].detail[0].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[0].name}</span>
            </Link>
            <Link to={`/room/${Data.region[regionId].detail[1].id}`} className="card">
                <img src={Data.region[regionId].detail[1].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[1].name}</span>
            </Link>
            <Link to={`/room/${Data.region[regionId].detail[2].id}`} className="card">
                <img src={Data.region[regionId].detail[2].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[2].name}</span>
            </Link>
            <Link to={`/room/${Data.region[regionId].detail[3].id}`} className="card">
                <img src={Data.region[regionId].detail[3].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[3].name}</span>
            </Link>
            <Link to={`/room/${Data.region[regionId].detail[4].id}`} className="card">
                <img src={Data.region[regionId].detail[4].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[4].name}</span>
            </Link>
            <Link to={`/room/${Data.region[regionId].detail[5].id}`} className="card">
                <img src={Data.region[regionId].detail[5].image} alt="여행지이미지" />
                <span className="card-title">{Data.region[regionId].detail[5].name}</span>
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
        width:80%;
        height:80%;
        border-radius: 20px;
        box-shadow: 2px 4px 4px 2px #999;
        background-color: #A6DBE1;
        overflow:hidden;
        cursor:pointer;
        img {
            width: 100%;
            height: 100%;
        }
        & .card-title {
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            display: block;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            text-shadow: 1px 1px 3px #000;
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
            position:relative;
            width: 100%;
            height: 100%;
            background-color:rgba(0,0,0,.5);
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


export default PointTemplate;