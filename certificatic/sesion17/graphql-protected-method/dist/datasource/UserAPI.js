"use strict";

var _apolloDatasource = require("apollo-datasource");

var _bcrypt = require("bcrypt");

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const saltRounds = 10;

class UserAPI extends _apolloDatasource.DataSource {
  constructor({
    store
  }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async createUser({
    name,
    email,
    password
  }) {
    const result = await this.store.Users.create({
      name,
      email,
      password: await (0, _bcrypt.hash)(password, saltRounds)
    });
    return result;
  }

  async getAllUsers() {
    const result = await this.store.Users.findAll();
    return result;
  }

}

module.exports = UserAPI;