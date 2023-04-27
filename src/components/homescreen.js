import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Homescreen = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (res) {
      setFetchData(res.data);
      console.log("this is it", fetchData);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Wrapper>
        {fetchData.map(({ name, id, username, email, address }) => (
          <Card key={id}>
            <Wrapping>
              <Span>{name}</Span>
              <Span>{username}</Span>
              <Span>{email}</Span>
              <Span>{address.street}</Span>
            </Wrapping>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  /* justify-content:space-between; */
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  width: 300px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapping = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Span = styled.div`
  font-size: 15px;
`;
