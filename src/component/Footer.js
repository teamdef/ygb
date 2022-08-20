import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterEl>
        <div className="container">

        </div>
      </FooterEl>
    </>
  );
};

// styled-components
const FooterEl = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  background-color: #ddd;
  padding: 0 12.5%;
  @media screen and (max-width: 480px) {
    padding: 0 4%;
  }
`;

export default Footer;
