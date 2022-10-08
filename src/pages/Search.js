import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Data from "../data.json";

const Search = () => {
  const { keyword } = useSelector((state) => state.keyword);
  console.log(keyword);

  // region(지역별) 배열 내에서의 검색결과
  const searchRegion = Data.region.filter((it) =>
    new RegExp(keyword, "i").test(it.name)
  );

  // detail(관광지별) 배열 내에서의 검색결과
  let searchDetail = [];
  for (let i = 0; i < Data.region.length; i++) {
    /** region 배열 내 여행지에서 검색어가 포함된 name 의 배열을 찾아 detail 에 저장 */
    let detail = Data.region[i].detail.filter((it) =>
      new RegExp(keyword, "i").test(it.name)
    );
    console.log(detail);
    if (detail.length != 0) searchDetail = [...detail];
  }
  // const searchRoom = Data.region.filter(it => new RegExp('제', "i").test(it.name));
  console.log(Data.region);
  console.log(searchDetail);

  return (
    <SearchEL>
      {/* keyword 의 값이 없을 경우 대비 */}
      {keyword != "" ? (
        <h1>
          <span className="keyword">'{keyword}'</span> 에 대한 검색 결과
        </h1>
      ) : (
        <h1>검색어를 입력해주세요 !</h1>
      )}

      <SearchContent>
        <div>
          <h2>
            지역 <span className="keyword">{`(${searchRegion.length})`}</span>
          </h2>
          <ResultWrap>
            {searchRegion.map(function (result, index) {
              let roomCount = 0;
              for (let i = 0; i < result.detail.length; i++){
                roomCount += result.detail[i].items.length;
              }
              return (
                <Link to="/" className="result-item" key={index}>
                  <h2>{result.name}</h2>
                  <p><span className="keyword">{roomCount}</span> 개의 숙소가 존재합니다.</p>
                </Link>
              );
            })}
          </ResultWrap>
        </div>

        <div>
          <h2>
            관광지 <span className="keyword">{`(${searchDetail.length})`}</span>
          </h2>
          <ResultWrap>
            {searchDetail.map(function (result, index) {
              return (
                <Link to="/" className="result-item" key={index}>
                  <h2>{result.name}</h2>
                  <p><span className="keyword">{result.items.length}</span> 개의 숙소가 존재합니다.</p>
                </Link>
              );
            })}
          </ResultWrap>
        </div>

        <div>
          <h2>숙소</h2>
        </div>
      </SearchContent>
    </SearchEL>
  );
};

const SearchEL = styled.div`
  padding: 80px 12.5% 10% 12.5%;
  position: relative;
  display: block;
  color: #888;
  .keyword {
    color: #00c2d6;
  }
  h1 {
    margin: 3%;
    font-size: 1.2rem;
  }
`;
const SearchContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ResultWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2%;
  padding: 3% 3% 5% 3%;
  .result-item {
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80px;
    padding: 0 8%;
    border: 1px solid #ddd;
    border-radius: 8px;
    >h2 {
      font-size: 1.8rem;
    }
    >p {
      color: #888;
    }
  }
`;

export default Search;
