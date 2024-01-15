import 'dotenv/config';
import express, { Request, Response, NextFunction, Application } from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import winston from 'winston';
import nocache from 'nocache';
import fs, { WriteStream } from 'fs';
import bodyParser from 'body-parser';
import compression from 'compression';
import Logger from 'utils/winston.utils';
import rateLimit from '../middlewares/rateLimit';
import chalk from 'chalk';
// import Routes from '../routes/v1/route-index';

export default class Express {
    private static app: Application;
    private static serverPort: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    private static accessLogStream: WriteStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });

    public static init() {
        this.app = express();
        // body parser middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // logging middlewares
        this.app.use(morgan('dev'));
        this.app.use(morgan('combined', { stream: this.accessLogStream }));
        // security middlewares
        this.app.use(
            cors({
                origin: ['http://localhost:3000', 'https://lead.nebulaholdings.co'],
                credentials: true,
            })
        );
        this.app.use(rateLimit());
        this.app.use(compression());
        this.app.use(nocache());
        this.app.use(helmet());

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.setHeader('X-XSS-Protection', '1; mode=block');
            next();
        });

        this.app
            .listen(this.serverPort, function () {
                console.log(chalk.green.bold(`Server running on : http://localhost:${process.env.PORT}`));
                Logger.info(`Server running on : http://localhost:${process.env.PORT}`);
            })
            .on('error', (err: Error) => {
                console.log(err);
            });
        process.on('beforeExit', function (err) {
            winston.error(JSON.stringify(err));
            console.log(err);
        });
    }


}