import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-6 shadow p-5">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Login</h2>
          <div className="from-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="from-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter passwrod"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
