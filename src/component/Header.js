import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderEl className="header">
            <Link to="/" className="logo">
                <h1>요근방</h1>
                <h2>랜드마크 근처 방 추천 서비스</h2>
            </Link>
        </HeaderEl>
    )
}




// styled-components 
const HeaderEl = styled.div`
    position: relative;
    height: 30%;
    background-color: #A6DBE1;
    & .logo {
    position:absolute;
    display:block;
    left: 10%;
    top:40%;
    color: #fff;
    & h1 {
        font-size: 3.5rem;
    }
    & h2 {
        margin-top: 10px;
        font-size: 1rem;
    }
}
`;


export default Header;