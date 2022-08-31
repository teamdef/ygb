import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterEl>
        <div className="container">
          <div className="footer-notice">
            <p style={{marginBottom:'8px'}}>
              요근방은 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의
              예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게
              있습니다.
            </p>
            <p>
              숙박업소는 법적으로 청소년 고용과 혼숙이 금지되어 있습니다. 따라서
              청소년 혼숙으로 인한 입실거부는 정당하며,<i className="tb"/> 이에 대한 법적 제재는
              이용 당사자가 책임져야 합니다.
            </p>
          </div>
          <div className="contact">
            <span>대표 : 장원석</span>
            <span>이메일 : yogeunbang@gmail.com</span>
          </div>
        </div>
      </FooterEl>
    </>
  );
};

// styled-components
const FooterEl = styled.div`

  position: relative;
  font-family: 'Pretendard-Regular';
  display:flex;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #e9e9ed;
  padding: 0 12.5%;
  font-size: 1.2rem;
  line-height: 1.5;
  .container {
    width: 100%;
  }
  color: #767676;
  .footer-notice {
    margin-bottom: 25px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }
  .contact {
    position:relative;
    display:flex;
    span {
      position:relative;
      margin-right: 16px;
    }
    span:first-child::after {
      content: '';
      position:absolute;
      top: 50%;
      transform:translateY(-50%);
      right: -8px;
      display:block;
      width: 1px;
      height:12px;
      background-color: #cdcdcd;
    }
  }
  .tb {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .tb {
      display: block;
    }
  }
  @media screen and (max-width: 480px) {
    .tb {
      display:none;
    }
    word-break: keep-all;
    padding: 0 4%;
  }
`;

export default Footer;
