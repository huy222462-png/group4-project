// src/App.js - Group 4 Fullstack Team
import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ color: 'green' }}>Group 4 - Fullstack App</h1>
      <p><strong>Backend:</strong> Kết nối MongoDB, xử lý đăng ký, đăng nhập.</p>
      <input type="email" placeholder="Email..." />
      <button style={{ margin: '10px', padding: '8px 16px' }}>Đăng ký</button>
      <p style={{ fontWeight: 'bold', color: 'green' }}>
        <strong>MỚI:</strong> Cập nhật giao diện + API ngày 22/10
      </p>
      <ul>
        <li>POST /api/users</li>
        <li>GET /api/users</li>
      </ul>
    </div>
  );
}

export default App;