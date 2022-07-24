import React from 'react';
import styled from "styled-components";
import Card from './Card';
import Data from "../data.json";
const RoomList = (props) => {
    let items = Data.region[props.regionId].detail[props.pointId].items;
    if(props.type != 0) {items = items.filter(item => item.type === props.type)};
    console.log(props.type);
    console.log(items.filter(item => item.type === props.type));

    const itemList = items.map((item,index) => (
        <Card item={item} key={index}/>
    )) 
    return (
        <RoomListLayout>
            {itemList}
        </RoomListLayout>
    )
}

// styled-components 
const RoomListLayout = styled.div`
    position:relative;
    display: block;
    padding: 5%;
    background-color:#fff;
`;


export default RoomList;