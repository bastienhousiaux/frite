import { CommonTools } from "../../../core/CommonTools.js"

export class Cursor{
    constructor(){
        this.mouse=CommonTools.mouse;
    }

    update(target){
        target.x=this.mouse.x;
        target.y=this.mouse.y;
    }
}