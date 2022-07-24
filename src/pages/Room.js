import React, { useState } from 'react';
import styled from "styled-components";
import RoomHeader from '../component/RoomHeader'
import RoomList from '../component/RoomList'
import { useLocation } from 'react-router-dom';

const Room = () => {
    // 숙박시설을 종류별로 나열하기 위해 type 생성
    const [ type, setType ] = useState(0);
    // PointTemplate.js 의 Link 로 부터 받은 state 를 사용하기 위해 Location을 사용;
    const location = useLocation();
    return (
        <Contents>
            <RoomHeader type={type} setType={setType} />
            <RoomList pointId={location.state.pointId}  regionId={location.state.regionId} type={type}/>
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