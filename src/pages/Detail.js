import React from 'react';
import styled from "styled-components";
import DetailHeader from '../component/DetailHeader';
import DetailTemplate from '../component/DetailTemplate';
const Detail = () => {
    return (
        <Contents>
            <DetailHeader/>
            <DetailTemplate/>
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


export default Detail;