import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label for="inputtag">Enter your name:</label>
      <input id="inputtag" type="text" value={name} onChange={handleChange} />
      <p></p>
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default User;
