import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CastleIcon from "@mui/icons-material/Castle";
import { magicClub } from "../data";

const Container = styled.div`
  margin-top: 40px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "50px",display:'flex',flexDirecion:'coloum '})}
`;

const Wrapper = styled.div`
  width: 90vw;
  border-radius: 30px;
  padding: 10px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #941b80;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  background-color: white;
  width: 80%;
  height: 90%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  ${mobile({ flex: 2, justifyContent: "center",   display: 'flex', flexDirection: 'column' })}
`;
const Right = styled.div`
  width: 30%;
  color: white;
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 40px;
  color: white;
`;
const MenuItem = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 30px;
  font-size: 24px;
  border: 1px solid white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Button = styled.button`
  margin-top: 20px;
  color: white;
  padding: 10px;
  font-size: 40px;
  background-color: transparent;
  border: 5px solid white;
  border-radius: 15px;
  cursor: pointer;
  
`;
const StoreCategory = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {magicClub.map((item) => (
            <MenuItem key={item.id}>
              <Title> {item.title}</Title>
              <Image src={item.img} />
            </MenuItem>
          ))}
        </Left>
        <Right>
          <CastleIcon style={{ fontSize: 100 }} />
          <Logo>Castle Clothing</Logo>
          <Button> Join Us</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default StoreCategory;
