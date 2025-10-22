// src/App.js - Backend Team
import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#fff0f0' }}>
      <h1 style={{ color: 'red' }}>API Backend - Backend Team</h1>
      <p>Kết nối MongoDB, xử lý đăng ký, đăng nhập.</p>
      <input type="email" placeholder="Email..." />
      <button style={{ margin: '10px', padding: '8px 16px' }}>Đăng ký</button>
      <ul>
        <li>POST /api/users</li>
        <li>GET /api/users</li>
      </ul>
    </div>
  );
}

export default App;