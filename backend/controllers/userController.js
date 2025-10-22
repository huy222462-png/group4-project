// Tạm thời lưu danh sách user trong mảng
let users = [];

// [GET] /users -> Trả về danh sách user
exports.getUsers = (req, res) => {
  res.json(users);
};

// [POST] /users -> Thêm user mới
exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({
    message: "User added successfully",
    data: newUser
  });
};
