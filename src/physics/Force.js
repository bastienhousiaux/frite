import { FriteMath } from "../math/FriteMath.js";
import { Vector2 } from "../math/Vector2.js";

export class Force extends Vector2{

    static MOVEMENT_STATUS={
        ACCELERATE:"accelerate",
        DECELERATE:"decelerate"
    };

    /**
     * 
     * @param {{
        *      x?:number,
        *      y?:number,
        *      length?:number,
        *      angle?:number,
        *      acceleration?:number,
        *      deceleration?:number,
        *      maxLength?:number,
        *       minLength?:number,
        *      status:Force.MOVEMENT_STATUS=Force.MOVEMENT_STATUS.ACCELERATE
        * }} options 
        */
    constructor(options){
        super(options);
        this.maxLength=options.maxLength!=undefined?options.maxLength:this.length;
        this.minLength=options.minLength!=undefined?options.minLength:0;
        this.acceleration=options.acceleration!=undefined?options.acceleration:this.maxLength;
        this.deceleration=options.deceleration!=undefined?options.deceleration:this.maxLength;
        this.status=options.status?options.status:Force.MOVEMENT_STATUS.ACCELERATE;
    }

    set accelerating(accelerating){
        this.status=accelerating?Force.MOVEMENT_STATUS.ACCELERATE:Force.MOVEMENT_STATUS.DECELERATE;
    }

    get accelerating(){
        return this.status==Force.MOVEMENT_STATUS.ACCELERATE;
    }

    update(delta){
        if(this.accelerating){
            if(this.length<this.maxLength){
                this.length=FriteMath.clampMax(this.maxLength,this.length+this.acceleration*delta);
            }
        }else{
            if(this.length>0){
                this.length=FriteMath.clampMin(0,this.length-this.deceleration*delta);
            }
        }
    }
}