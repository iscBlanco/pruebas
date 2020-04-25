"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasource = require("apollo-datasource");

var _jsonwebtoken = require("jsonwebtoken");

var _bcrypt = require("bcrypt");

var _apolloServer = require("apollo-server");

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthAPI extends _apolloDatasource.DataSource {
  constructor({
    store
  }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.config = config.context;
  }

  async getToken({
    email,
    password
  }) {
    _logger.default.info(`[getToken] email: ${email}`);

    const user = await this.store.Users.findOne({
      where: {
        email
      }
    });

    _logger.default.info(`[getToken] user found: ${JSON.stringify(user)}`);

    if (user && email === user.email && (await (0, _bcrypt.compare)(password, user.password))) {
      const tokenData = {
        email: email,
        roles: ['copywriter'] //TODO: read from DB

      };
      return (0, _jsonwebtoken.sign)(tokenData, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
    }

    _logger.default.error(`[getToken] invalid credentials, email: ${email}, password: ${password}`);

    throw new _apolloServer.AuthenticationError('Invalid credentials');
  }

  async verifyToken(token) {
    let isValidToken = false;

    if (!token) {
      _logger.default.error('[verifyToken] missing token');

      throw new _apolloServer.ApolloError('Missing token', 'MISSING_TOKEN');
    }

    return (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        _logger.default.error(`[verifyToken] invalid token: ${token}`);

        throw new _apolloServer.ApolloError('Invalid token', 'INVALID_TOKEN');
      }

      return !isValidToken;
    });
  }

}

exports.default = AuthAPI;