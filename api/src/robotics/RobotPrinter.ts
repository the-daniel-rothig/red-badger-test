import { Robot } from './Robot';

export class RobotPrinter {
    static getPositionString(robot: Robot) : string {
        const lostString = robot.isLost ? " LOST" : "";
        return `${robot.position.x} ${robot.position.y} ${robot.orientation.name}${lostString}`;
    }
    
    static getBulkString(robots: Robot[]) : string {
        return robots.map(r => RobotPrinter.getPositionString(r)).join("\n");
    }
}