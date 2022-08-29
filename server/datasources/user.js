const {RESTDataSource} = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.realworld.io/api/';
  }


  async postUser() {
    const testUser  = {
      user: {
        username:'zh12345',
        email: 'zihao12345@a.com',
        password: 'zhpswd'
      }
    };
    const res = await this.post('users',testUser);
    return res.user;
  }

}

module.exports = UserAPI;