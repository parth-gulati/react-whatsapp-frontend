import { useState } from "react";
import { Container } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import BREAKPOINTS from "../../common/extras/breakpoints";

const Login = () => {
  const breakpoints = useBootstrapBreakpoints();
  console.log(breakpoints);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledContainer BREAKPOINTS={BREAKPOINTS}>
      <h1 className="display-1 text-center pt-3">Login</h1>
      <Container className="ml-auto text-dark p-5">
        <LoginForm
          email={email}
          password={password}
          setPassword={setPassword}
          setEmail={setEmail}
        />
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  width: 50%;

  @media (max-width: ${(props) => props.BREAKPOINTS.md}) {
    width: 80%;
  }
`;

export default Login;
