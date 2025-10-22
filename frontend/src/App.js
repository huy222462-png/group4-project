import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend - Quản lý người dùng</h1>
      <AddUser />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
