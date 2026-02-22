import React, { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Your email is ${email}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
