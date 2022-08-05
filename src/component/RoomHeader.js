import React from 'react';
import styled from "styled-components";

const RoomHeader = (props) => {
    const isActive = (_num) => {
        if(_num == props.type){
            return true;
        } else {
            return false;
        }
    }

    return (
        <RoomHeaderLayout>
            <nav>
                <button  className={(isActive(0) ? 'active' : 'inactive')} onClick={() => {props.setType(0)}}>전체</button>
                <button  className={(isActive(1) ? 'active' : 'inactive')} onClick={() => {props.setType(1)}}>게하</button>
                <button  className={(isActive(2) ? 'active' : 'inactive')} onClick={() => {props.setType(2)}}>펜션</button>
                <button  className={(isActive(3) ? 'active' : 'inactive')} onClick={() => {props.setType(3)}}>호텔</button>
                <button  className={(isActive(4) ? 'active' : 'inactive')} onClick={() => {props.setType(4)}}>독채</button>
            </nav>
        </RoomHeaderLayout>
    )
}

// styled-components 
const RoomHeaderLayout = styled.div`
    position:relative;
    width:100%;
    height: 80px;
    background-color:#00baca;
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