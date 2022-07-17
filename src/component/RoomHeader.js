import React from 'react';
import styled from "styled-components";

const RoomHeader = () => {
    return (
        <RoomHeaderLayout>
            <nav>
                <span>전체</span>
                <span>게하</span>
                <span>펜션</span>
                <span>호텔</span>
                <span>독채</span>
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
        span {
            font-size: 1.3rem;
            font-weight: bold;
            color: #fff;
            text-shadow: 1px 1px 1px #000;
        }
    }
`;


export default RoomHeader;