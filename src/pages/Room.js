import React from 'react';
import styled from "styled-components";
import RoomHeader from '../component/RoomHeader'
import RoomList from '../component/RoomList'
const Room = () => {
    return (
        <Contents>
            <RoomHeader />
            <RoomList />
        </Contents>
    )
}

// styled-components 
const Contents = styled.div`
    position:relative;
    display:block;
    width:100%;
    height:100%;
`;


export default Room;