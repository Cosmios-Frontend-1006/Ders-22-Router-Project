import React, { useState } from "react";

const Login = ({ isLogin, setIsLogin }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(password);

    setIsLogin(true);

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1 className="text-center my-3">Login</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          value={name}
          onChange={(e) => {
            // console.log(e.target.value)
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputSurname" className="form-label">
          Surname
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputSurname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;

// rafce
