import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
const DetailHeader = () => {
    return (
        <HeaderEl className="header">
            <img src="assets/img/head/head_2.png" alt="지역 헤더 이미지" />
        </HeaderEl>
    )
}




// styled-components 
const HeaderEl = styled.div`
    position: relative;
    height: 30%;
    background-color: #A6DBE1;
    img {
        display: block;
        width:100%;
        height: 100%;
    }
    & h1 {
        position: absolute;
        left: 10%;
        top:40%;
        font-size: 3rem;
        color: #fff;
    }
}
`;


export default DetailHeader;