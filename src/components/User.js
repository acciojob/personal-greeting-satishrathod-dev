import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Enter your name:</label>
      </div>
      <input type="text" value={name} onChange={handleChange} />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default User;
