import { observable, action } from "mobx";
import Agents from "../agents/agents";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

class AuthStore {
  @observable
  user = null;

  @action
  setUser(user) {
    this.user = user;
  }

  registerUser() {
    return Agents.registerUser
    .uploadRegisterUser(this.user)
    .then(res => console.log("ello")/*history.push("/login")*/)
    .catch(
      action("fetchError", error => {
        console.log("error loading data", error);
        this.setError({
          status: 404,
          message: "There was an error loading the content."
        });
      })
    );
  }

  loginUser() {
    return Agents.loginUser
    .loginUser(this.user)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      //const decoded = jwt_decode(token);
      // Set current user
     // dispatch(setCurrentUser(decoded));
    })
    .catch(
      action("fetchError", error => {
        console.log("error loading data", error);
        this.setError({
          status: 404,
          message: "There was an error loading the content."
        });
      })
    );
  }
}

export default new AuthStore();