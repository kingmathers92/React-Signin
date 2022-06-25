import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  console.log(details.gender);

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  function handleChange(event) {
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form onSubmit={submitHandler} autocomplete="off">
      <div className="form-inner">
        <h2>Sign In</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            autofocus
            className="custom-input"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={details.name}
            placeholder="Your Name"
          />
          <span class="underline"></span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="custom-input"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={details.email}
            placeholder="Email"
          />
          <span class="underline"></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="custom-input"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={details.password}
            placeholder="Create Password"
          />
          <span class="underline"></span>
        </div>
        <fieldset>
          <legend>Gender</legend>

          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <br />

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <br />

          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
          <br />
        </fieldset>
        <input className="log-in" type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
