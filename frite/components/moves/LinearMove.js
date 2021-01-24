import { Vector2 } from "../../math/Vector2.js";
import {Component} from "../Component.js";

export class LinearMove extends Component{
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
        let angle=options.angle||0;
        this.maxSpeed=options.maxSpeed;
        this.acceleration=options.acceleration!=undefined?options.acceleration:options.maxSpeed;
        this.movementVector=Vector2.fromAngle(angle,0);
    }

    init(gameObject){
        gameObject.addForce(this.movementVector);
    }

    get currentSpeed(){
        return this.movementVector.length;
    }

    update(){
        if(this.movementVector.length<this.maxSpeed){
            let newLength=this.movementVector.length+this.acceleration;
            if(newLength<=this.maxSpeed) this.movementVector.setLength(newLength);
            else this.movementVector.setLength(this.maxSpeed);
        }
    }
}