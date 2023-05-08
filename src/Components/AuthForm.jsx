import React from "react";

export default function AuthForm({
  username,
  passwordHash,
  setUsername,
  setPasswordHash,
  onSubmit,
}) {
  const submitCallback = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={submitCallback}>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={passwordHash}
          onChange={(event) => setPasswordHash(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
