import {
  createLogger, Logger, format, transports, addColors
} from 'winston';

const customFormat = format.printf(({
  level, message, timestamp,
}) => `[ ${timestamp} ] - ${level}: ${message}`);

const logger : Logger = createLogger({
  format: format.combine(
    format.label({ label: 'server log', message: true }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.colorize({
      colors: {
        info: 'blue',
        error: 'red',
        warn: 'yellow',
      },
    }),
    customFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});

export default logger;
