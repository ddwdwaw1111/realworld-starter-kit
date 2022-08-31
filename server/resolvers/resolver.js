module.exports = {
  Query: {
    registration: (_, {username, email, password}, {dataSources}) => dataSources.UserAPI.registration(username,email, password),
    login: (_, {email, password}, {dataSources}) => dataSources.UserAPI.login(email, password),
    getProfile:(_,{username},{dataSources}) => dataSources.UserAPI.getProfile(username),
    getArticles: (_,{tag,author,limit,offset},{dataSources}) => dataSources.ArticleAPI.getArticles(tag,author,limit,offset),
  }
};