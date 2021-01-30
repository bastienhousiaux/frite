import { Point } from "../math/Point.js";

export class Grid{
    /**
     * 
     * @param {
     *      cellWidth:number,
     *      cellHeight:number,
     *      cellXSpacing:number=0,
     *      cellYSpacing:number=0,
     *      offsetX:number=0,
     *      offsetY:number=0
     * } options 
     */
    constructor(options){
        this.cellWidth=options.cellWidth;
        this.cellHeight=options.cellHeight;
        this.cellXSpacing=options.cellXSpacing!=undefined?options.cellXSpacing:0;
        this.cellYSpacing=options.cellYSpacing!=undefined?options.cellYSpacing:0;
        this.offsetX=options.offsetX!=undefined?options.offsetX:0;
        this.offsetY=options.offsetY!=undefined?options.offsetY:0;
    }

    getGridXFromRealX(x){
        return Math.floor((x-this.offsetX)/(this.cellWidth+this.cellXSpacing));
    }

    getGridYFromRealY(y){
        return Math.floor((y-this.offsetY)/(this.cellHeight+this.cellYSpacing));
    }

    getRealXOfCell(x){
        return x*(this.cellWidth+this.cellXSpacing)+this.offsetX;
    }

    getRealYOfCell(y){
        return y*(this.cellHeight+this.cellYSpacing)+this.offsetY;
    }

    getCoordsOfPosition(point){
        return new Point(
            this.getGridXFromRealX(point.x),
            this.getGridYFromRealY(point.y)
        );
    }

    getPositionOfCoords(point){
        return new Point(
            this.getRealXOfCell(point.x),
            this.getRealYOfCell(point.y)
        );
    }

    forEachCells(fromX,toX,fromY,toY,callback){
        for(let i=fromY;i<toY;i++)
            for(let j=fromX;j<toX;j++)
                callback(j,i);
    }
}