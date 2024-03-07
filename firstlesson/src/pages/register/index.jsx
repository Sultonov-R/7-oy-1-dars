import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate = () => {
    if (!username || !email || !password || !repassword) {
      alert("Please fill all inputs");
      return false;
    }
    if (password !== repassword || password.length < 8) {
      alert("Passwords do not match or are not valid");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = { username, email, password };
      let users = [];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
      }
      const isExistUser = users.some((u) => u.email === user.email);
      if (isExistUser) {
        alert("User already exists with this email");
      } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = '/login'
      }
    }
  };

  return (
    <div className="register-wrapper">
      <h1 className="register-name">Library</h1>
      <p>Register and start to be a member of Library</p>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
          className="username"
          placeholder="Username"
          type="text"
        />
        <input
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={(e) => setRepassword(e.target.value)}
          value={repassword}
          className="repassword"
          placeholder="Repassword"
          type="password"
        />
        <div className="span-info">
          <span>Already have your account?</span>
          <p>
            <Link to="/login">Click here</Link>
          </p>
        </div>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
