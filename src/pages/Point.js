import React from 'react';
import styled from "styled-components";
import PointHeader from '../component/PointHeader';
import PointTemplate from '../component/PointTemplate';
const Point = () => {
    return (
        <Contents>
            <PointHeader/>
            <PointTemplate/>
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