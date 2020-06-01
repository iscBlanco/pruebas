"use strict";

var _apolloServer = require("apollo-server");

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _connection = _interopRequireDefault(require("./persistence/connection"));

var _AuthAPI = _interopRequireDefault(require("./datasource/AuthAPI"));

var _UserAPI = _interopRequireDefault(require("./datasource/UserAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

//const store = createStore()
const server = new _apolloServer.ApolloServer({
  typeDefs: _schema.default,
  resolvers: _resolvers.default,
  dataSources: () => ({
    authAPI: new _AuthAPI.default({
      store
    }),
    userAPI: new _UserAPI.default({
      store
    })
  })
});
server.listen().then(({
  url
}) => {
  console.log(`Server running at ${url}`);
});