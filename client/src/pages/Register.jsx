import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const FilterText = styled.span`
  margin: 20px 0px 0px 0px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Register = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isAdmin,setIsAdmin]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const information = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            lastname,
            username,
            email,
            password,
            isAdmin,
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    information();
    console.log({name,lastname,username,email,password,isAdmin});
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" type="password" />
          <FilterText>are you Admin?</FilterText>
          <Select
            onChange={(e) => setIsAdmin(e.target.value)}
            defaultValue={false}
          >
            <Option value={true}>true</Option>
            <Option value={false}>false</Option>
          </Select>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e) => handleSubmit(e)}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
