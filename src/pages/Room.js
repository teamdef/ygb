import styled from "styled-components";
import RoomList from "../component/RoomList";

const Room = () => {
  // 숙박시설을 종류별로 나열하기 위해 type 생성
  return (
    <Contents>
      <RoomList/>
    </Contents>
  );
};
// styled-components
const Contents = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export default Room;
