import axios from "axios";

const requests = {
  get: (url, responseType) => makeRequest("get", url, undefined, responseType),
  post: (url, data) => makeRequest("post", url, data),
  put: (url, data) => makeRequest("put", url, data),
  delete: (url, responseType) =>
    makeRequest("delete", url, undefined, responseType)
};

// Register User
const registerUser = {
  uploadRegisterUser: (userData) => {
    requests.post("/api/users/register", userData)
  }
};

// Login - get user token
const loginUser = {
  loginUser: (userData) => {
    requests.post("/api/users/login", userData)
  }
}

export default {
  logoutUser,
  registerUser,
  loginUser
}