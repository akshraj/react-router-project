import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../../apis/api";
import useSWRMutation from "swr/mutation";
import { setUserToLocalStorage } from "../../utils";

export default function Login() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const message = state?.message || "";
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const { trigger, data, error, isMutating } = useSWRMutation(
    "/api/login",
    loginUser
  );

  useEffect(() => {
    if (data) {
      navigate("/host");
    }
    if (error) {
      setErr(error);
    }
  }, [JSON.stringify(data), error]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, password } = loginFormData;
    setErr(null);
    trigger({ email, password });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  if (data) {
    setUserToLocalStorage(data);
  }

  return (
    <div className="login-container">
      {message ? <div className="login-badge">{message}</div> : null}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        {err && <div className="login-error">{err["message"]}</div>}
        <button disabled={isMutating}>
          {isMutating ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
