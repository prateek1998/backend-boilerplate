import { createLogger, format, transports } from "winston";
import appRoot from "app-root-path";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }: any) => {
    const msg = `${timestamp} [${label}] [${level}]: ${message}`;
    return msg;
});

const appName = process.env.APPNAME;

const options = {
    globalLogs: {
        level: 'info',
        filename: `${appRoot}/src/logs/global.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 100,
        colorize: true,
    },
    redirectionLogs: {
        level: 'info',
        filename: `${appRoot}/src/logs/api-redirection.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 100,
        colorize: true,
    },
    errorFile: {
        level: 'error',
        filename: `${appRoot}/src/logs/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 100,
        colorize: true,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        filename: `${appRoot}/src/logs/access.log`,
        json: false,
        colorize: true,
    },
};

const Logger = createLogger({
    format: combine(label({ label: appName }), timestamp(), myFormat),
    transports: [new transports.File(options.errorFile), new transports.File(options.globalLogs)],
    exitOnError: false, // do not exit on handled exceptions
});

export default Logger;