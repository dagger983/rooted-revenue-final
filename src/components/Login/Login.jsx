import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ mobile: "", password: "" });

  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateMobile = () => {
    if (mobile.trim() === "") {
      return "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      return "Mobile number must be 10 digits";
    }
    return "";
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate fields
    const mobileError = validateMobile();
    const passwordError = validatePassword();

    if (mobileError || passwordError) {
      setErrors({ mobile: mobileError, password: passwordError });
      return; // Prevent submission if there are errors
    }

    try {
      // Make API request for login
      const response = await fetch("https://rooted-revenue-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNo: mobile, password: password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assume server returns JSON with error
        throw new Error(errorData.error || "Invalid mobile number or password.");
      }

      const data = await response.json();

      // Handle successful login (you can store the token in local storage if using token)
      alert("Login successful! Redirecting to home...");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // Reset errors on mobile or password change
    setErrors({ mobile: "", password: "" });
  }, [mobile, password]);

  return (
    <div className="login-page">
      <div className="welcome-section">
        <h2>Welcome To Login</h2>
        <p>Don't have an account?</p>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="welcome-section2">
        <h2>Login</h2>
        <div className="welcome-section3">
          <form onSubmit={handleLogin}>
            <label className="login-label" htmlFor="mobile">
              Mobile No
            </label>
            <br />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
            <br />
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <br />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <br />
            <button className="LoginBtn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
