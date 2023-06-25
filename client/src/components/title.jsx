
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;


const Head = styled.h1`
  font-size: 80px;
  color: black;
`;

const Title = (props) => {
  return (
    <Container>
      <Head>{props.title}</Head>
    </Container>
  );
};

export default Title;
