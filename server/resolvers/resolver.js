module.exports = {
  Query: {
    user: (_, __, {dataSources}) => dataSources.UserAPI.postUser(),
  }
};