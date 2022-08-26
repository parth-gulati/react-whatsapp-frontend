import { Container } from "react-bootstrap";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import breakpoints from "../../common/extras/breakpoints";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmission = (values) => {
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/login`, values)
      .then((res) => {
        if (res.status === 200) {
          toast.success("User successfully logged in");
          navigate("/");
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
      <h1 className="display-1 text-center pt-3">Login</h1>
      <Container className="ml-auto text-dark p-5">
        <LoginForm handleSubmission={handleSubmission} />
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

export default Login;
