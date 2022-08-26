import { Container } from "react-bootstrap";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";
import breakpoints from "../../common/extras/breakpoints";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmission = (values) => {
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/register`, values)
      .then((res) => {
        if (res.status === 200) {
          toast.success("User successfully registered");
          navigate("/login");
        }
      })
      .catch((err) => {
        err.response.data
          ? toast.error(err.response.data)
          : toast.error(err.message);
      });
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
