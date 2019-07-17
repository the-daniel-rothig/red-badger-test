import { Grid } from './Grid';
import { Robot } from './Robot';
import { Orientations, Orientation } from './Orientation';

export class GridParser {
    readonly input : string;

    constructor(input: string) {
        this.input = input;
    }

    private static readonly gridInitRegex = /^(-?[0-9]+)\s+(-?[0-9]+)/;
    private readonly emptyLineRegex = /^\s*$/;
    private readonly robotInitRegex = /^(-?[0-9]+)\s+(-?[0-9]+)\s+([NESW])/;
    private readonly robotProgressionRegex = /^[LRF\s]*$/;

    getGrid() : Grid {
        return GridParser.GetGrid(this.input.split("\n")[0]);
    }

    static GetGrid(firstLine:string) : Grid {        
        const match = firstLine.match(this.gridInitRegex);
        if (!match) {
            throw "Parse error: first line is not a grid size"
        } 
        return new Grid(parseInt(match[1]), parseInt(match[2]));
    }

    *getRobots() : IterableIterator<Robot> {
        const lines = this.input.split("\n");
        let grid = GridParser.GetGrid(lines[0]);

        for (let i = 1; i < lines.length; i++) {
            if (this.emptyLineRegex.test(lines[i])) {
                continue;
            }

            const init = lines[i].match(this.robotInitRegex);
            if (!init) {
                continue;
            }
            
            let robot = grid.placeRobot(parseInt(init[1]), parseInt(init[2]), this.getOrientation(init[3]))

            const progression = (lines[i+1] || "").match(this.robotProgressionRegex);
            if (!!progression) {
                for (let j = 0; j < progression[0].length; j++) {
                    switch(progression[0][j]) {
                        case "L": 
                            robot = robot.turnLeft();
                            break;
                        case "R":
                            robot = robot.turnRight();
                            break;
                        case "F":
                            robot = robot.stepForward();
                            break;
                        default:
                            //do nothing
                    }
                }
            }
            
            yield robot;
            grid = robot.grid;
        }
    }

    private getOrientation(name: string) : Orientation {
        switch (name) {
            case "N": return Orientations.North;
            case "E": return Orientations.East;
            case "S": return Orientations.South;
            case "W": return Orientations.West;
            default: throw "unknown orientation: " + name;
        }
    }
}