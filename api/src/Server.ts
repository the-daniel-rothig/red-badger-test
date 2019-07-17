import cookieParser from 'cookie-parser';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import { RobotPrinter } from './robotics/RobotPrinter';
import { GridParser } from './robotics/GridParser';
import cors from 'cors';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/grid', (req: Request, res: Response) => {
    const result = RobotPrinter.getBulkString(Array.from(new GridParser(req.query.data).getRobots()));
    res.send(result);    
});

app.get("*", (req: Request, res: Response) => {
    res.send("ok");
});

// Export express instance
export default app;
