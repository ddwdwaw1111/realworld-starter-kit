const {RESTDataSource} = require('apollo-datasource-rest');

class ArticleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.realworld.io/api/';
  }

  async getArticles(tag,author,limit,offset) {
    const res = await this.get('articles/',tag,author,limit,offset);
    console.log(res)
    return res;
  }

}

module.exports = ArticleAPI;