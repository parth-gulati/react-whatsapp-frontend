import { Container } from "react-bootstrap";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import breakpoints from "../../common/extras/breakpoints";

const Login = () => {
  const handleSubmission = (values) => {
    console.log(values);
  };

  return (
    <StyledContainer breakpoints={breakpoints}>
      <h1 className="display-1 text-center pt-3">Login</h1>
      <Container className="ml-auto text-dark p-5">
        <LoginForm handleSubmission={handleSubmission} />
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  width: 60%;

  ${(props) => {
    console.log(props);
  }}
  @media (max-width: ${(props) => props.breakpoints.lg}) {
    width: 80%;
  }
`;

export default Login;
