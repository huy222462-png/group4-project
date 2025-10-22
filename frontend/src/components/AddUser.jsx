import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Tên không được để trống");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email không hợp lệ");
      return;
    }

    const newUser = { name, email };
    await axios.post("http://localhost:3000/users", newUser);

    setName("");
    setEmail("");
    alert("Thêm user thành công!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Thêm người dùng</h2>
      <input
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  );
}
