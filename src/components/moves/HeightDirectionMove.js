import { CommonTools } from "../../core/CommonTools.js";
import { Vector2 } from "../../math/Vector2.js";
import { Force } from "../../physics/Force.js";
import { Component } from "../Component.js";

export class HeightDirectionMove extends Component{

    /**
     * 
     * @param {{
     * maxSpeed:number,
     * acceleration?:number,
     * deceleration?:number,
     * leftKeyCode:37,
     * rightKeyCode:39,
     * upKeyCode:38,
     * downKeyCode:40
     * }} options
     */
    constructor(options){
        super(options);
        this.keyboard=CommonTools.keyboard;
        this.leftKeyCode=options.leftKeyCode||37;
        this.rightKeyCode=options.rightKeyCode||39;
        this.upKeyCode=options.upKeyCode||38;
        this.downKeyCode=options.downKeyCode||40;
        this.movementVectors={
            left:new Force({length:0,angle:180,maxLength:options.maxSpeed,acceleration:options.acceleration,deceleration:options.deceleration,status:Force.MOVEMENT_STATUS.DECELERATE}),       
            right:new Force({length:0,angle:0,maxLength:options.maxSpeed,acceleration:options.acceleration,deceleration:options.deceleration,status:Force.MOVEMENT_STATUS.DECELERATE}),       
            top:new Force({length:0,angle:270,maxLength:options.maxSpeed,acceleration:options.acceleration,deceleration:options.deceleration,status:Force.MOVEMENT_STATUS.DECELERATE}),        
            down:new Force({length:0,angle:90,maxLength:options.maxSpeed,acceleration:options.acceleration,deceleration:options.deceleration,status:Force.MOVEMENT_STATUS.DECELERATE})       
        }
    }

    init(gameObject){
        gameObject.addForce(this.movementVectors.left);
        gameObject.addForce(this.movementVectors.right);
        gameObject.addForce(this.movementVectors.top);
        gameObject.addForce(this.movementVectors.down);
    }

    update(){
        if(this.keyboard.isKeyDown(this.leftKeyCode)){
            this.movementVectors.left.accelerating=true;
            this.movementVectors.right.accelerating=false;
        }else{
            if(this.keyboard.isKeyDown(this.rightKeyCode)){
                this.movementVectors.right.accelerating=true;
                this.movementVectors.left.accelerating=false;
            }else{
                this.movementVectors.right.accelerating=false;
                this.movementVectors.left.accelerating=false;
            }
        }

        if(this.keyboard.isKeyDown(this.upKeyCode)){
            this.movementVectors.top.accelerating=true;
            this.movementVectors.down.accelerating=false;
        }else{
            if(this.keyboard.isKeyDown(this.downKeyCode)){
                this.movementVectors.down.accelerating=true;
                this.movementVectors.top.accelerating=false;
            }else{
                this.movementVectors.top.accelerating=false;
                this.movementVectors.down.accelerating=false;
            }
        }
    }
}