import { GameObject } from "../core/GameObject.js";
import {Layer} from "./Layer.js";
export class Scene extends GameObject{
    constructor(resources){
        super(new PIXI.Container());
        this.layers=[];
        this.resources=resources||{};
        this.initialized=false;
    }

    createLayer(){
        var layer=new Layer();
        this.layers.push(layer);
        this.pixiElement.addChild(layer.pixiElement);
        return layer;
    }

    update(delta){
        for(let i=0;i<this.layers.length;i++)this.layers[i].update(delta);
    }

    init(pixiFactory){

    }
}