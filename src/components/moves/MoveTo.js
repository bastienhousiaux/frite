import { LinearMove } from "./LinearMove";

export class MoveTo extends LinearMove{
    /**
     * 
     * @param {
        *  maxSpeed:number,
        *  angle?:number,
        *  acceleration?:number,
        * enabled:boolean=true
        *  
        * } options 
        */
       constructor(options){
           super(options);
       }

       moveTo(point){
           this.destination=point;
       }

       update(pixiElement){
            if((Math.abs(pixiElement.x-this.destination.x) +
            Math.abs(pixiElement.y-this.destination.y))<(this.maxSpeed+this.acceleration)){
                
            }
       }
}