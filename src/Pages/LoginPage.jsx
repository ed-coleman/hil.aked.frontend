import React from "react";
import AuthForm from "../Components/AuthForm";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SessionContext } from "../Contexts/SessionContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setToken, user, setUser, verifyToken, token } =
    useContext(SessionContext);

  const [username, setUsername] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://hil-aked-backend.adaptable.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, passwordHash }),
        }
      );
      const parsed = await response.json();
      console.log("login parsed: ", parsed);

      setToken(parsed.token);

      if (response.status === 200) {
        navigate("/work");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Log in</div>
      <AuthForm
        username={username}
        setUsername={setUsername}
        passwordHash={passwordHash}
        setPasswordHash={setPasswordHash}
        onSubmit={handleSubmit}
        isLogin
      />
    </>
  );
}
