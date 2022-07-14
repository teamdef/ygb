import React from 'react';
import styled from "styled-components";
import Template from "../component/Template"
import Header from "../component/Header"
const Main = () => {
    return (
        <Contents>
            <Header />
            <Template />
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


export default Main;