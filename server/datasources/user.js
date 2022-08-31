const {RESTDataSource} = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.realworld.io/api/';
  }


  async registration(username,email, password) {
    const testUser = {
      user: {
        username: username,
        email: email,
        password: password
      }
    };
    const res = await this.post('users',testUser);
    return res.user;
  }

  async login(email, password) {
    const user = {
      user: {
        email: email,
        password: password
      }
    }
    const res = await this.post('users/login',user);
    return res.user;
  }

  async getProfile(username) {
    const res = await this.get(`profiles/${username}`);
    return res.profile;
  }

}

module.exports = UserAPI;