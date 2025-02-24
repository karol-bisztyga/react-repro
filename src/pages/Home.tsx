import React, { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("asd");
  const [email, setEmail] = useState("asd15@aa.aa");
  const [password, setPassword] = useState("asdasdasd");

  const [signedUp, setSignedUp] = useState(false);

  const handleRegister = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const url = "https://jsonplaceholder.typicode.com";
      const response = await fetch(url, config);
      if (response.ok) {
        console.log("ok", response);
      } else {
        throw new Error(response.statusText);
      }

      setSignedUp(true);
    } catch (e) {
      console.error("register error", e);
    }
  };

  if (signedUp) {
    return (
      <>
        <button
          style={{ padding: 500 }}
          onClick={() => {
            setSignedUp(false);
          }}
        >
          go back
        </button>
      </>
    );
  }

  return (
    <div id="sign-up-container">
      <div id="sign-up-wrapper">
        <div className="section">
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="section">
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="section">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <div className="section">
          <button onClick={handleRegister}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};
