import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");
  const [surname, setSurname] = useState("");

  function handleChange(event) {
    setfName(event.target.value);
  }

  function handleSurname(event) {
    setSurname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {surname}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleSurname} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
