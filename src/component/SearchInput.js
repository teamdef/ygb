import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeSearch } from "../reducers/searchReducer";

const SearchInput = () => {
  const dispatch = useDispatch();
  // 검색창에 입력된 내용을 실시간으로 받아옴
  const [search, setSearch] = useState("");
  // input 값 state 로 변경
  const onChange = (e) => {
    if (e != "") setSearch(e.target.value);
  };

  // 검색 버튼 클릭 시 redux에 input.value를 저장 후 input.value 초기화
  const onClick = () => {
    setSearch("");
    dispatch(changeSearch(search));
  };
  return (
    <SearchInputEL>
      <input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="검색"
      />
      <Link to={search != '' ? `search=${search}` : "search=null"} className="search-btn" onClick={onClick}>
        <img src="/search.png"></img>
      </Link>
    </SearchInputEL>
  );
};
const SearchInputEL = styled.div`
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
      transition: width 0.3s;
      border-bottom: 2px solid #00c2d6;
    }
  }
  .search-btn {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default SearchInput;
