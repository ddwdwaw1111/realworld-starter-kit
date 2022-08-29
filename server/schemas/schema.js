const {gql} = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
type User {
  username: String
  email: String
  bio: String
  image: String
  password: String
  token: String
}

type Query {
  user: User
}
`;

module.exports = typeDefs;