import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CastleIcon from "@mui/icons-material/Castle";


const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  height: 90%;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const Language = styled.span`
  font-size: 24px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  font-size: 26px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" style={{ fontSize: 26 }} />
            <Search style={{ color: "gray", fontSize: 46 }} />
          </SearchContainer>
        </Left>
        <Center>
          <CastleIcon style={{ fontSize: 40 }} />
          <Logo>Castle Clothing</Logo>
        </Center>
        <Right>
          {!user && (
            <>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          {user && (
            <Logo style={{ fontSize: 20, fontWeight: 100 }}>
              welcome {user.username} to our castel
            </Logo>
          )}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ fontSize: 40 }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
