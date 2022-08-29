// We will cover using dotenv in a later lesson
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/resolver');

const UserAPI = require('./datasources/user');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    UserAPI: new UserAPI(),
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    🌝Listening on port 4000
    
  `);

});