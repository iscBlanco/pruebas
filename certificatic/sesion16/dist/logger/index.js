"use strict";

var _winston = require("winston");

var _winstonDailyRotateFile = _interopRequireDefault(require("winston-daily-rotate-file"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  timestamp,
  errors,
  printf
} = _winston.format;
const logger = (0, _winston.createLogger)({
  level: 'debug',
  format: _winston.format.combine(timestamp({
    format: 'YYYY-MM-DDTHH:mm:ss'
  }), errors({
    stack: true
  }), printf(({
    timestamp,
    level,
    message
  }) => {
    return `${timestamp} | ${level} | ${message}`;
  })),
  transports: [new _winstonDailyRotateFile.default({
    filename: './logs/application-error-%DATE%.log',
    level: 'error',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  }), new _winstonDailyRotateFile.default({
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new _winston.transports.Console({
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.simple())
  }));
}

module.exports = logger;