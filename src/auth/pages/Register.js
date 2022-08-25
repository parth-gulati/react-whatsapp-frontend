import { useState } from "react";
import { Container } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";
import BREAKPOINTS from "../../common/extras/breakpoints";

const Register = () => {
  const breakpoints = useBootstrapBreakpoints();
  console.log(breakpoints);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <StyledContainer BREAKPOINTS={BREAKPOINTS}>
      <h1 className="display-1 text-center pt-3">Register</h1>
      <Container className="ml-auto text-dark p-5">
        <RegisterForm
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
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

export default Register;
