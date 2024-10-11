import React, { useState, useEffect } from "react";
import "./Login.css"; // Reusing the same CSS file as Login
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", mobile: "", password: "" });

  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateFields = () => {
    const usernameError = username.trim() === "" ? "Username is required" : username.length < 3 ? "Username must be at least 3 characters" : "";
    const mobileError = mobile.trim() === "" ? "Mobile number is required" : !/^\d{10}$/.test(mobile) ? "Mobile number must be 10 digits" : "";
    const passwordError = password.trim() === "" ? "Password is required" : password.length < 6 ? "Password must be at least 6 characters" : "";

    setErrors({ username: usernameError, mobile: mobileError, password: passwordError });

    return !(usernameError || mobileError || passwordError); // Returns true if no errors
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") setUsername(value);
    if (name === "mobile") setMobile(value);
    if (name === "password") setPassword(value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate fields
    if (validateFields()) {
      try {
        // Make API request for registration
        const response = await fetch("https://rooted-revenue-backend.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, mobileNo: mobile, password }),
        });

        // Check if response is not OK (status code 200-299)
        if (!response.ok) {
          const errorText = await response.text(); // Get the response as text
          // Attempt to parse it as JSON
          try {
            const errorData = JSON.parse(errorText);
            throw new Error(errorData.message || "Registration failed.");
          } catch {
            throw new Error(errorText); // If parsing fails, throw the raw text as an error
          }
        }

        // If response is OK, parse it as JSON
        const userData = await response.json();
        // Store only the username in cookies for 7 days
        Cookies.set("user",username, { expires: 7 });

        // Show an alert and then redirect
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    // Reset errors when input changes
    setErrors({ username: "", mobile: "", password: "" });
  }, [username, mobile, password]);

  return (
    <div className="login-page">
      <div className="welcome-section">
        <h2>Welcome To Register</h2>
        <p>Already have an account?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="welcome-section2">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div style={{ marginTop: "20px" }}>
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleInputChange}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
            <br />
            <label className="login-label" htmlFor="mobile">
              Mobile No
            </label>
            <br />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={mobile}
              onChange={handleInputChange}
              required
            />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
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
                onChange={handleInputChange}
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
            {errors.password && <div className="error">{errors.password}</div>}
            <br />
          </div>
          <div>
            <button className="LoginBtn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
