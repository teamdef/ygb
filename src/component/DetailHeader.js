import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
const DetailHeader = () => {
    const { regionId } = useParams();
    const regionName = ["제주도","부산","강릉","속초","여수","서울"];

    return (
        <HeaderEl className="header">
            <h1>{regionName[regionId]}</h1>
        </HeaderEl>
    )
}




// styled-components 
const HeaderEl = styled.div`
    position: relative;
    height: 30%;
    background-color: #A6DBE1;
    
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