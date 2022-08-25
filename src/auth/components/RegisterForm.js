import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterForm = ({ handleSubmission }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
    password: Yup.string()
      .min(6, "*Password must be atleast 6 characters")
      .max(32, "*Password cannot be more than 32 characters long")
      .required("*Password is required"),
    confirmPassword: Yup.string()
      .required("*Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "*Passwords must match"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        handleSubmission(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              type="text"
              placeholder="Pick your own unique username"
              isInvalid={touched.name && errors.name}
            />
            {touched.name && errors.name ? (
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email"
              isInvalid={touched.email && errors.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {touched.email && errors.email ? (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              name="password"
              placeholder="Enter password"
              isInvalid={touched.password && errors.password}
            />
            {touched.password && errors.password ? (
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="Please confirm your password"
              isInvalid={touched.confirmPassword && errors.confirmPassword}
            />

            {touched.confirmPassword && errors.confirmPassword ? (
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
