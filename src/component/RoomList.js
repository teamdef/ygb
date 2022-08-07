import styled from "styled-components";
import Card from "./Card";
import Data from "../data.json";

const RoomList = (props) => {
  // 숙박시설정보 배열
  let items = Data.region[props.regionId].detail[props.pointId].items;
  if (props.type !== 0) {
    items = items.filter((item) => item.type === props.type);
  }

  // 숙박시설정보 배열을 도보 거리순으로 정렬 5 > 10 > 15
  items = items.sort(function (a, b) {
    return parseFloat(a.time) - parseFloat(b.time);
  });

  const count_5m = items.findIndex((item) => item.time <= 5);
  const count_10m = items.findIndex((item) => item.time >= 10);
  const count_15m = items.findIndex((item) => item.time >= 15);
  const Roomtype = () => {
    // 리팩토링 예정
    if (props.type == 0) return <span>근방에 존재하는 <b>"숙소" </b>가 없어요!</span>;
    else if (props.type == 1) return <span>근방에 존재하는 <b>"게스트하우스" </b>가 없어요!</span>;
    else if (props.type == 2) return <span>근방에 존재하는 <b>"펜션" </b>가 없어요!</span>;
    else if (props.type == 3) return <span>근방에 존재하는 <b>"호텔" </b>가 없어요!</span>;
    else if (props.type == 4) return <span>근방에 존재하는 <b>"독채" </b>가 없어요!</span>;
  };

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
  console.log(Roomtype());
  return (
    <RoomListLayout>
      {itemList.length != 0 ? (
        itemList
      ) : (
        <div className="empty">{Roomtype()}</div>
      )}
    </RoomListLayout>
  );
};

// styled-components
const RoomListLayout = styled.div`
  position: relative;
  display: block;
  padding: 5%;
  padding-top: 145px;
  background-color: #fff;
  min-height: 100vh;
  .empty {
    padding-top: 70%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #999;
    b {
      color: #00baca;
      font-size: 1.5rem;
    }
  }
`;

export default RoomList;
