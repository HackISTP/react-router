import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); //동적이동
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input value={text} placeholder="video Id" onChange={handleChange} />
      </form>
    </div>
  );
}
