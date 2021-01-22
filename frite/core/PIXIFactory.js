export class PIXIFactory{

    constructor(loader){
        this.loader=loader;
    }

    getTexture(name){
        return this.loader.resources[name].texture;
    }

    getAtlasTexture(atlas,texture){
        return this.loader.resources[atlas].textures[texture];
    }

    createSprite(textureName,atlasTextureName){
        if(atlasTextureName)return new PIXI.Sprite(this.getAtlasTexture(textureName,atlasTextureName));
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