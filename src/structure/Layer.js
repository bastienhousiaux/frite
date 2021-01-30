import { Frite } from "../core/Frite.js";
import { GameObject } from "../core/GameObject.js";

export class Layer extends GameObject{
    constructor(){
        super(new PIXI.Container());
    }

    addChild(child){
        let gameObject=new GameObject(child);
        child.gameObject=gameObject;
        this.pixiElement.addChild(child);
        return gameObject;
    }

    createTilingSprite(textureName,width,height,options){
        return this.addChild(
            Frite.pixiFactory.createTilingSprite(textureName,width,height,options)
        );
    }

    createSprite(textureName,options){
        return this.addChild(
            Frite.pixiFactory.createSprite(textureName,options)
        );
    }

    createSpriteFromAtlas(atlasName,textureName,options){
        return this.addChild(
            Frite.pixiFactory.createSpriteFromAtlas(atlasName,textureName,options)
        );
    }

    update(delta){
        for(let i=0;i<this.pixiElement.children.length;i++){
            let currentChild=this.pixiElement.children[i];
            if(currentChild.gameObject){
                currentChild.gameObject.update(delta);
            }else{
                console.warn("unexpected layer child without gameObject properties :");
                console.warn(currentChild);
                console.warn("you should use Layer.addChild to add the child to the layer");
            }
        }
    }
}