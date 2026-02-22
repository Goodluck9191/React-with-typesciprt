import { useState } from "react";




function App() {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`Your form successfull submitted with email of ${email} and password of ${password}`)
  };

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter your Email</label>
          <input type="email" placeholder="email" onChange={(e) => (setEmail(e.target.value))} required />
        </div>

        <div>
          <label htmlFor="password">Enter ypur Password</label>
          <input type="password" placeholder="passowrd" onChange={(e) => (setPassword(e.target.value))} required/>
        </div>

        <button type="submit">Login </button>
      </form>

    </div>
  );
}

export default App;
