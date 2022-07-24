import React, {useState} from 'react';
import styled from "styled-components";

const RoomHeader = (props) => {
    
    console.log("type :" + props.type);
    return (
        <RoomHeaderLayout>
            <nav>
                <button onClick={() => {props.setType(0)}}>전체</button>
                <button onClick={() => {props.setType(1)}}>게하</button>
                <button onClick={() => {props.setType(2)}}>펜션</button>
                <button onClick={() => {props.setType(3)}}>호텔</button>
                <button onClick={() => {props.setType(4)}}>독채</button>
            </nav>
        </RoomHeaderLayout>
    )
}

// styled-components 
const RoomHeaderLayout = styled.div`
    position:relative;
    width:100%;
    height: 80px;
    background-color:#A6DBE1;
    nav {
        position:absolute;
        bottom: 0;
        padding-bottom: 10px;
        display:block;
        width:100%;
        justify-content: space-around;
        display:flex;
        button {
            font-size: 1.3rem;
            font-weight: bold;
            border: 0;
            background-color: transparent;
            color: #fff;
            text-shadow: 1px 1px 1px #000;
            &.active {
                color: #000;
                font-size: 1.5rem;
                text-shadow: 1px 1px 1px #fff;
            }
        }
    }
`;


export default RoomHeader;