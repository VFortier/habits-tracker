import axios from "axios";
import config from '../config/config';

class AuthService {
  login(email, password) {
  	console.log(email + password);
    return axios
      .post(config.API_URL + "/user/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  signup(nickname, email, password) {
    return axios.post(config.API_URL + "/user/signup", {
      nickname,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();