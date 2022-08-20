import styled from "styled-components";
import PointTemplate from "../component/PointTemplate"

const Point = () => {
    
    return (
        <Contents>
            <PointTemplate />
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