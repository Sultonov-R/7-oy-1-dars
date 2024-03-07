import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css'

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate=()=>{
    if(!username || !email || !password){
      alert("Fill all inputs");
      return false;
    }
    if ( password.length < 8) {
      alert("Passwords do not match or are not valid");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return false;
    }
    return true
  }
  
  const handleLogin = (e)=>{
    e.preventDefault();
    if (validate()) {
      const user = { username, email, password };
      let users = [];
      if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
      }
      console.log(users);
      const isExistUser = users.some((u) => u.email === user.email || u.password === user.password);
      if(isExistUser){
        console.log("ddoko");
        navigate('/');
        
    }
    
    }
  }

  return (
      <div className="login-wrapper">
        <h1 className="login-name">Library</h1>
        <p>Register and start to be a member of Library</p>
        <form>
          <input onChange={(el)=>setUsername(el.target.value)} value={username} className="username" placeholder="Username" type="text" />
          <input onChange={(el)=>setEmail(el.target.value)} value={email} className="email" placeholder="Email" type="email" />
          <input onChange={(el)=>setPassword(el.target.value)} value={password} className="password" placeholder="Password" type="password" />
          <div className="span-info">
            <p>
            Don't you have an account?
              <Link to="/register">Click here</Link>
            </p>
          </div>
          <button onClick={handleLogin} className="login-button">Login</button>
        </form>
      </div>
  );
}

export default Login;
