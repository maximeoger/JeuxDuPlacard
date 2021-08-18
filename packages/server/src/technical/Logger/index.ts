import {
  createLogger, Logger, format, transports,
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
    customFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});

export default logger;
