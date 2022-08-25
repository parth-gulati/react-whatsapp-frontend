import "./App.css";
import { ThemeProvider, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate,
} from "react-router-dom";
import Login from "./auth/pages/Login";
import Register from "./auth/pages/Register";
import Header from "./common/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./suits/pages/Dashboard";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Router>
        <Header />
        <Container fluid className="App">
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
