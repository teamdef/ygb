import { useState } from "react";
import styled from "styled-components";
import Data from '../data.json'
const Search = () => {
  // 검색창에 입력된 내용을 실시간으로 받아옴
  const [search, setSearch] = useState("");
  const searchRegion = Data.region.filter(it => new RegExp('제', "i").test(it.name));
  const searchDetail = Data.region.filter(it => new RegExp('제', "i").test(it.name));
  const searchRoom = Data.region.filter(it => new RegExp('제', "i").test(it.name));
  console.log(Data.region.length);
  console.log(searchRegion);
  console.log(searchDetail);
  console.log(searchRoom);
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <SearchEL>
      <input type="text" value={search} onChange={onChange} placeholder="검색"/>
      <button>
        <img src="/search.png"></img>
      </button>
    </SearchEL>
  );
};
const SearchEL = styled.div`
  position: relatve;
  display: flex;
  align-items: center;
  height: 45%;
  input {
    font-size: 1.5rem;
    padding: 10px 0;
    outline: none;
    border: none;
    border-bottom: 2px solid transparent;
    width: 50px;
    &:focus {
      width: 150px;
      transition: width .3s;
      border-bottom: 2px solid #00c2d6;
    }
  }
  button {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
  }
`;
export default Search;
