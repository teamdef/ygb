
import React from 'react';
import styled from "styled-components";
const NotFound = () => {
    return (
        <Contents>
            페이지를 찾을 수 없습니다 !
        </Contents>
    )
}

// styled-components 
const Contents = styled.div`
    position:relative;
    display:block;
    width:100%;
    height:100%;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
`;


export default NotFound;