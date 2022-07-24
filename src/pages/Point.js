import React from 'react';
import styled from "styled-components";
import PointHeader from '../component/PointHeader';
import PointTemplate from '../component/PointTemplate';
import { useLocation } from 'react-router-dom';

const Point = () => {
    const location = useLocation();
    const id = location.state.id;
    return (
        <Contents>
            <PointHeader/>
            <PointTemplate id={id}/>
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


export default Point;