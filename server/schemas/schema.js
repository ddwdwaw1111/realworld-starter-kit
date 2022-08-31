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

type Profile {
  username: String
  bio: String
  image: String
  following: Boolean
}

type Author {
  username: String
  bio: String
  image: String
  following: String
}

type Article {
    slug: String
    title: String
    description: String
    body: String
    tagList: [String]
    createdAt: String
    updateAt: String
    favorited: Boolean
    favoritedCount: Int
    author: Author
}

type Articles {
  articles: [Article]
  articlesCount: Int
}

type Query {
#Registration
  registration(username: String! email: String! password: String!): User
#Login
  login(email: String! password: String!): User
#Get profile
  getProfile(username: String!): Profile

#Get articles
  getArticles(tag: String author: String favorited: String limit: Int offset: Int): Articles
}
`;

module.exports = typeDefs;