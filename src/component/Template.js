import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Template = () => {
    return (
        <TemplateEl className="Template">
            
            <Link to="/detail/0" className="card">
                <span className="card-title">제주도</span>
            </Link>
            <Link to="/detail/1" className="card">
                <span className="card-title">부산</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to="/detail/2" className="card">
                <span className="card-title">강릉</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to="/detail/3" className="card">
                <span className="card-title">속초</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to="/detail/4" className="card">
                <span className="card-title">여수</span>
                <div className="cap"><span>comming soon</span></div>
            </Link>
            <Link to="/detail/5" className="card">
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
            font-size: 2rem;
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


export default Template;