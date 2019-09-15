import axios from 'axios';

export default class AuthService {
  constructor(domain) {
    this.domain = domain;
  }
  login(email, password) {
    axios.post(`${this.domain}/user/new`, {email, password}).then((response) => {
      localStorage.setItem('token', response.data.account.token);
    });
  }
  logout() {
    localStorage.removeItem('token');
  }
}
