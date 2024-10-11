import React, { useEffect, useState } from 'react';
import './Admin.css'; // Import the stylesheet

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (replace with real authentication logic)
    if (username === 'admin' && password === 'rrf@2024') {
      setIsAuthenticated(true); // Set authenticated state to true
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated) return; // Prevent fetching if not authenticated

      try {
        const response = await fetch('https://rooted-revenue-backend.onrender.com/admin');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [isAuthenticated]);

  return (
    <div className="admin-container">
      {!isAuthenticated ? (
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
            
              <input
                type="text"
                placeholder='Username'
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            
              <input
                type="password"
                placeholder='Password'
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div>
          <h1>User Data</h1>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Mobile No</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.mobileNo}</td>
                    <td>{user.password}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No user data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;
