import React from 'react';
import styled from "styled-components";
import Distance5min from './Distance5min';
import Distance10min from './Distance10min';
import Distance15min from './Distance15min';

const RoomList = () => {
    return (
        <RoomListLayout>
            <Distance5min/>
            <Distance10min/>
            <Distance15min/>
        </RoomListLayout>
    )
}

// styled-components 
const RoomListLayout = styled.div`
    position:relative;
    display: block;
    padding: 5%;
    background-color:#fff;
`;


export default RoomList;