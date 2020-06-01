"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  Query: {
    login: async (_, {
      email,
      password
    }, {
      dataSources
    }) => await dataSources.authAPI.getToken({
      email,
      password
    }),
    isValidToken: async (_, {
      token
    }, {
      dataSources
    }) => await dataSources.authAPI.verifyToken(token)
  },
  Mutation: {
    signup: async (_, {
      name,
      email,
      password
    }, {
      dataSources
    }) => {
      return dataSources.userAPI.createUser({
        name,
        email,
        password
      });
    }
  }
};
exports.default = _default;