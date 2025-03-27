import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { loginValidation } from "../../schema/validations";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/slices/loginSlice";



function Login() {
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch  = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema:loginValidation,

    onSubmit: async (values) => {
      setLoading(true);
      setErrorMsg("");

      try {
        let response = await axios.post(`http://localhost:5000/login`, values);
        dispatch(loginAction(response.data.data.name))

        if (response) {
          localStorage.setItem("token", response?.data?.token);
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email}
            </div>
          </Form.Group>

          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "login"}
          </Button>

          <div className="login-link">
         
            <p>
              New Registration <Link to="/signUp">signUp</Link>
            </p>
            <p>
              Already Have Account <Link to="/">Home</Link>
            </p>
            <p>
              Forget your Password{" "}
              <Link to="/forgetpass">Forget Password</Link>
            </p>
            
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
