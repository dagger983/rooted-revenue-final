import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
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
      <Helmet>
        /* Primary Meta Tags */
        <title>Login</title>
        <meta name="title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta name="description" content="Expert financial solutions tailored to help your business thrive. Let us guide you in maximizing your revenue potential." />
        
        /* Open Graph / Facebook Meta Tags */
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rootedrevenuefinance.com" />
        <meta property="og:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="og:description" content="Tailored financial strategies to elevate your business." />
        <meta property="og:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />
        
        /* Twitter Meta Tags */
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rootedrevenuefinance.com" />
        <meta property="twitter:title" content="Rooted Revenue Financial Services - Empowering Your Business Growth" />
        <meta property="twitter:description" content="Expert financial solutions tailored to help your business thrive." />
        <meta property="twitter:image" content="https://rootedrevenuefinance.com/rrf-logo1.webp" />

        /* SEO Meta Tags */
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="financial services, business growth, revenue optimization, financial consulting,Rooted Revenue Financial Services,Rooted Revenue Manapparai,Rooted Revenue Financial Consulting,Financial Services Manapparai,Rooted Revenue Expert Financial Solutions,Rooted Revenue Business Growth,
        Rooted Revenue Corporate Finance,Manapparai Revenue Optimization,Rooted Revenue Advisory Services,Rooted Revenue Financial Planning Manapparai, best personal loan in manapparai," />
        <meta name="author" content="Rooted Revenue Finance,Best Personal Loan in Trichy,Car Loan Providers Trichy,Home Loan Trichy Low Interest,Personal Loan for Salaried Employees Trichy,Trichy Personal Loan with Quick Approval,Home Loan Consultancy in Trichy,Low Interest Car Loans Trichy,Instant Loan Approval Trichy,Financial Loan Services Trichy,Trichy Home Loan Advisors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="distribution" content="global" />

        /* Canonical Link */
        <link rel="canonical" href="https://rootedrevenuefinance.com" />

        /* Favicon */
        <link rel="icon" type="image/webp" href="https://rootedrevenuefinance.com/rrf-logo1.webp" />

        /* Additional Meta Tags */
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Rooted Revenue Finance" />
        <meta name="application-name" content="Rooted Revenue Finance" />
      </Helmet>
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
