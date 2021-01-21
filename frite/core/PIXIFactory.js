export class PIXIFactory{

    constructor(loader){
        this.loader=loader;
    }

    getTexture(name){
        return this.loader.resources[name].texture;
    }

    createSprite(textureName){
        return new PIXI.Sprite(this.getTexture(textureName));
    }

    createGraphics(){
        return new PIXI.Graphics();
    }

    createRectangle(width,height,color){
        let graphics=this.createGraphics();
        graphics.beginFill(color);
        graphics.drawRect(0,0,width,height);
        graphics.endFill();
        return graphics;
    }

}