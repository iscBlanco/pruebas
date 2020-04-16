const {gpl} = require('apollo-server')

const typeDefs = gql`
type Query{
    getUsers: [User]
}
type Mutation {
    signup(name: String, email:String, password:String)
}
type User{
    id:ID,
    name: String,
    email: String
}
`
module.exports = typeDefs