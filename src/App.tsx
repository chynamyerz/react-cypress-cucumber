import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 98vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1em;
  padding: 0.5em;
  width: 90%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: grey;
  &:focus {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: lightblue;
    outline: none;
  }
`;

const Button = styled.button`
  background: ${(props: { primary?: string }) =>
    props.primary ? "lightblue" : "white"};
  color: ${(props: { primary?: string }) =>
    props.primary ? "white" : "lightblue"};
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid lightblue;
  border-radius: 5px;
  margin-right: 0px;
  width: 100%;
  &:focus {
    border-bottom-color: lightblue;
    outline: none;
  }
`;

const Divider = styled.div`
  margin-top: 1em;
  width: 100%;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuccessMessage = styled.p`
  background-color: lightgreen;
  font-weight: bold;
  padding: 1em;
`;

const ErrorMessage = styled.p`
  background-color: red;
  font-weight: white;
  padding: 1em;
`;

function App() {
  const [username, setUsername] = useState<string>();
  const [loggedInMessage, setLoggedInMessage] = useState<string>();

  const handleLogin = () => {
    if (username === "test") {
      setLoggedInMessage("Logged in successfully");
    } else {
      setLoggedInMessage("Logged in failed");
    }
  };
  return (
    <Container>
      <Login>
        {loggedInMessage?.includes("successfully") && (
          <SuccessMessage data-cy="message">{loggedInMessage}</SuccessMessage>
        )}
        {loggedInMessage?.includes("failed") && (
          <ErrorMessage data-cy="message">{loggedInMessage}</ErrorMessage>
        )}
        <Input
          data-cy="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Divider />
        <Input data-cy="password" type="password" placeholder="Password" />
        <Divider />
        <Button data-cy="login-btn" onClick={handleLogin}>
          Login
        </Button>
      </Login>
    </Container>
  );
}

export default App;
