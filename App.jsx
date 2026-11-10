
import React, { useState } from "react";
import "./App.css";

// Employee Data
const employees = [
  {
    id: 1,
    name: "Vignesh Kumar",
    email: "vignesh@thestackly.com",
    age: 24,
    city: "Chennai",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Arun Kumar",
    email: "arun@thestackly.com",
    age: 25,
    city: "Bangalore",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@thestackly.com",
    age: 23,
    city: "Coimbatore",
    role: "UI Designer"
  },
  {
    id: 4,
    name: "Rahul",
    email: "rahul@thestackly.com",
    age: 26,
    city: "Madurai",
    role: "Full Stack Developer"
  },
  {
    id: 5,
    name: "Sneha",
    email: "sneha@thestackly.com",
    age: 22,
    city: "Salem",
    role: "Web Developer"
  }
];

// Login Component
function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">👋</div>
        <h1>Welcome Back!</h1>
        <p>Please login to view the employee dashboard.</p>
        <button onClick={onLogin} className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
}

// Home Component
function Home({ onLogout }) {
  return (
    <div className="dashboard">
      <header className="navbar">
        <h2>Employee Dashboard</h2>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <section className="welcome">
        <h1>Welcome to Home Page! 🎉</h1>
        <p>Here is the employee information.</p>
      </section>

      <h2 className="section-title">Employee Details</h2>

      <div className="employee-container">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="profile-icon">👤</div>

            <h3>{employee.name}</h3>

            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>City:</strong> {employee.city}</p>

            <span className="role">{employee.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;