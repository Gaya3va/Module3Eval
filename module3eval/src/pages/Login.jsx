import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // ADMIN
    if (email === "admin@gmail.com" && password === "admin1234") {
      login("admin");
      navigate("/admin/dashboard");
      return;
    }

    // CUSTOMER
    if (email === "customer@gmail.com" && password === "customer1234") {
      login("customer");
      navigate("/customers/dashboard");
      return;
    }

    alert("Invalid email or password");
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
