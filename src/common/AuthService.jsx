import axios from 'axios';

export default class AuthService {
  constructor(domain) {
    this.domain = domain;
  }
  login(email, password) {
    axios.post(`${this.domain}/api/user/login`, {email, password}).then((response) => {
      if(response.status === 200 && response.data.status) {
        localStorage.setItem('token', response.data.account.token);
        window.location.href = '/feed';
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
  }
  register(email, password, answers) {
    axios.post(`${this.domain}/api/user/new`, {email, password}).then((response) => {
      if(response.status === 200 && response.data.status) {
        localStorage.setItem('token', response.data.account.token);
        this.sendAnswers(answers);
        window.location.href = '/feed';
      }
    });
  }
  sendAnswers(answers) {
    answers['location'] = '02155';
    answers['location_mode'] = 1;
    answers['income'] = answers['gross-annual-household-income'];
    answers['size'] = answers['people-in-household'];
    axios.post(`${this.domain}/api/init`, {...answers}, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      console.log(response.data)
    });
  }
}
