import { Container } from "react-bootstrap";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";
import breakpoints from "../../common/extras/breakpoints";

const Register = () => {
  const handleSubmission = (values) => {
    console.log(values);
  };

  return (
    <StyledContainer breakpoints={breakpoints}>
      <h1 className="display-1 text-center pt-3">Register</h1>
      <Container className="ml-auto text-dark p-5">
        <RegisterForm handleSubmission={handleSubmission} />
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  width: 40%;

  @media (max-width: ${(props) => props.breakpoints.lg}) {
    width: 80%;
  }
  @media (max-width: ${(props) => props.breakpoints.sm}) {
    width: 100%;
  }
`;

export default Register;
