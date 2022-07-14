import React from 'react';
import styled from "styled-components";
import { Link,useParams } from 'react-router-dom';
import Data from '../data.json';
const DetailTemplate = () => {
    const { regionId } = useParams();
    console.log(Data);
    console.log(Data.region[regionId]);
    return (
        <TemplateEl className="Template">
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[0]}</span>
            </Link>
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[1]}</span>
            </Link>
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[2]}</span>
            </Link>
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[3]}</span>
            </Link>
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[4]}</span>
            </Link>
            <Link to="/detail" className="card">
                <span className="card-title">{Data.region[regionId].detail[5]}</span>
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
        & .card-title {
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            display: block;
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            white-space: nowrap;
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


export default DetailTemplate;