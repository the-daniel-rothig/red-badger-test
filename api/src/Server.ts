import cookieParser from 'cookie-parser';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import { RobotPrinter } from './robotics/RobotPrinter';
import { GridParser } from './robotics/GridParser';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/grid', (req: Request, res: Response) => {
    const result = RobotPrinter.getBulkString(Array.from(new GridParser(req.params.data).getRobots()));
    res.send(result);    
});

app.get("*", (req: Request, res: Response) => {
    res.send("ok");
});

// Export express instance
export default app;
