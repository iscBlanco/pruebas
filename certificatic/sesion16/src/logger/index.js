/*const {createLogger, format, transports } = require('winston')

const logger = createLogger({
    level:'info',
    format: format.combine(
        format.timestamp({
            format:'YYYY-MM-DDTHH:mm:ss'
        }),
        errors({ stack:true }),
        printf(({timestamp, level, message})=>{
            return `${timestamp} | ${level} | ${message}`
        })
    ),
    transports:[
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log'})
    ]
})

if(process.env.NODE_ENV !== 'production'){
    createLogger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple
        )
    }))
}
module.exports = logger */


const { createLogger, format, transports } = require('winston')
const DailyRotateFile = require ('winston-daily-rotate-file')
const { timestamp, errors, printf } = format

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    timestamp({
      format: 'YYYY-MM-DDTHH:mm:ss'
    }),
    errors({ stack: true }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} | ${level} | ${message}`
    })
  ),
  transports:[
    //new transports.File({ filename: 'error.log', level: 'error' }),
    //new transports.File({ filename: 'combined.log' })
    new (DailyRotateFile)({
      filename:'./logs/application-%DATE%.log',
      datePattern:'YYYY-MM-DD-HH-mm',
      zippedArchive:true,
      maxSize:'20m',
      maxFiles:'14d'
    }),
    new(DailyRotateFile)({
      filename:'./logs/application-error-%DATE%.log',
      level: 'error',
      
    })
  ]
})

if(process.env.NODE_ENV !== 'production'){
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }))
}

module.exports = logger