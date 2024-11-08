export const AuthService = {
  register: (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.username === username)) {
      return { success: false, message: "Username sudah terdaftar" };
    }
    const newUser = { username, password, saldo: 100000, purchases: [] };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true, message: "Registrasi berhasil" };
  },

  login: (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return { success: true, message: "Login berhasil" };
    } else {
      return { success: false, message: "Username atau password salah" };
    }
  },

  logout: () => {
    localStorage.removeItem("currentUser");
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("currentUser");
  },
  updateUserData: (updatedUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(
      (user) => user.username === updatedUser.username
    );
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  },
};
