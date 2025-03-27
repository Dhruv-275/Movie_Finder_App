 
import { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { SignUpValidation } from "../../schema/validations";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/login.css"

 
function SignUp() {
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
 
    validationSchema: SignUpValidation,
 
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMsg("");
 
      try {
        let response = await axios.post(`http://localhost:5000/signup`,values);
 
        if (response) {
          navigate("/");
        }
 
        console.log("singup API response==>>", response);
      } catch (error) {
        console.log(" singup API error==>", error);
 
        setErrorMsg(error.response?.data?.message);
      }
 
      setLoading(false);
 
 
    },
  });
 
  return (
    <>
    <div className="loginDiv">
      <Form onSubmit={formik.handleSubmit} className="signup-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         
          />
        <div style={{ color: "red" }}>{formik.touched.name && formik.errors.name}</div>
       
        </Form.Group>
 
       
 
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           <div style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</div>
        </Form.Group>
 
 
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            name="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           
          />
         <div style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</div>
 
         </Form.Group>
 
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
 
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Sign up"}
        </Button>
 
        <div className="login-link">
          <p>
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
      </div>
    </>
  );
}
 
export default SignUp;
 
 