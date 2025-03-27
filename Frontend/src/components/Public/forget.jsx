import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router";




const ForgetPass = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const requestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/forget`, {
        email,
      });
      alert(response.data.message);
      setStep(2);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:3000/forget`, {
        otp,
        password,
        confirmPassword,
      });
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginDiv">
      <Form
        onSubmit={step === 1 ? requestOtp : resetPassword}
        className="signup-form"
      >
        {step === 1 ? (
          <>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </Button>
          </>
        ) : (
          <>
            <Form.Group className="mb-3" controlId="formOtp">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <Button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </>
        )}
        <div className="text-center mt-3">
          <p>
            Back to Login <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
      </div>
  );
};

export default ForgetPass;
