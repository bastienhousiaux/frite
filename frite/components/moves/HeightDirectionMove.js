import { CommonTools } from "../../core/CommonTools.js";
import { Vector2 } from "../../math/Vector2.js";

export class HeightDirectionMove{

    /**
     * 
     * @param {{
     * maxSpeed:number,
     * acceleration:number,
     * deceleration:number
     * }} options
     */
    constructor(options){
        this.keyboard=CommonTools.keyboard;
        this.movementVector=new Vector2(0,0);
    }

    init(gameObject){
        gameObject.addForce(this.movementVector);
    }

    update(target){
        if(this.keyboard.isKeyDown(37)){
            this.movementVector.x=-1;
        }else{
            if(this.keyboard.isKeyDown(39)){
                target.x+=1;
            }
        }

        if(this.keyboard.isKeyDown(38)){
            target.y-=1;
        }else{
            if(this.keyboard.isKeyDown(40)){
                target.y+=1;
            }
        }
    }
}