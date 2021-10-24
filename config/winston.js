const winston = require("winston");

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logs/log-file.log' }),
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp(), winston.format.json()
    ),
    exitOnError: false,
});

logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
}
module.exports = logger;