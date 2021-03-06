"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

var _default = (0, _apolloServer.gql)`
    type Query{
      login(email: String, password: String): String
      isValidToken(token:String):Boolean
      person(id:Int): [Person]
    }
    type Mutation {
      signup(name: String, email: String, password:String): User
    }
    type User{
      id: ID
      name: String
      email: String
    }
    type Person {
      id: ID
      first_name: String
      last_name: String
      email: String
      gender: String
      ip_address: String
    }
`;

exports.default = _default;