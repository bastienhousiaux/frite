import { CommonTools } from "../../core/CommonTools.js";
import { Vector2 } from "../../math/Vector2.js";
import { Component } from "../Component.js";

export class PlatformerCharacter extends Component{
    /**
     * 
     * @param {{
     *      enabled:boolean=true
     * }} options 
     */
    constructor(options){
        super(options);
        this.gravity=3;
        this.jumpForce=0;
        CommonTools.keyboard.onKeyPressed(38,()=>{
            if(this.jumpForce>=0)this.jumpForce=-30;
        })
        // this.movementVector=new Vector2();
    }

    init(gameObject){
        this.movementVector=Vector2.fromXY(0,this.gravity);
        gameObject.addForce(this.movementVector);
    }

    update(target){
       
        if(this.jumpForce<0){
            target.y+=this.jumpForce;
            this.jumpForce+=this.gravity;
        }else{
            target.y+=this.gravity;
        }
        if(CommonTools.keyboard.isKeyDown(37))target.x-=3;
        else if(CommonTools.keyboard.isKeyDown(39))target.x+=3;
        
    }
}