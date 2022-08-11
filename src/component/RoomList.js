import styled from "styled-components";
import Card from "./Card";
import Data from "../data.json";
import { TiWarningOutline } from "react-icons/ti";

const RoomList = (props) => {
  let items = Data.region[props.regionId].detail[props.pointId].items; // 숙박시설정보 배열
  let open = true; // 해당 여행지 숙소 정보 등록 유무

  if (props.type !== 0) {
    items = items.filter((item) => item.type === props.type);
  }
  // 숙소 전체목록이 0개 일 시 준비 중
  else if (props.type == 0 && items.length == 0) {
    open = false;
  }
  items = items.sort(function (a, b) {
    return parseFloat(a.time) - parseFloat(b.time);
  });

  // 숙박시설정보 배열을 도보 거리순으로 정렬 5 > 10 > 15
  const count_5m = items.findIndex((item) => item.time <= 5);
  const count_10m = items.findIndex((item) => item.time >= 10);
  const count_15m = items.findIndex((item) => item.time >= 15);

  const itemList = items.map((item, index) => (
    <Card
      item={item}
      key={index}
      folder={props.detailId}
      count_5m={index == count_5m}
      count_10m={index == count_10m}
      count_15m={index == count_15m}
    />
  ));
  return (
    <RoomListLayout>
      {open ? (
        itemList.length != 0 ? (
          itemList
        ) : (
          <div className="empty">
            <TiWarningOutline size="100" color="#aaa" />
            <span>근방에 존재하는 숙소가 없습니다</span>
          </div>
        )
      ) : (
        <div className="empty">
        <TiWarningOutline size="100" color="#aaa" />
        <span>준비 중 입니다 !</span>
      </div>
      )}
    </RoomListLayout>
  );
};

// styled-components
const RoomListLayout = styled.div`
  position: relative;
  display: block;
  padding: 5%;
  padding-top: 143px;
  background-color: #fff;
  min-height: 100vh;
  .empty {
    padding-top: 50%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #999;
    svg {
      position: relative;
      display: block;
      margin: 0 auto;
      margin-bottom: 10%;
    }
  }
`;

export default RoomList;
