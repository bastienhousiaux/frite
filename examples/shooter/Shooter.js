import { App } from "../../frite/core/App.js";
import {Scene} from "../../frite/structure/Scene.js";

const shooter=new App({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio || 1
});

class GameScene extends Scene{
    constructor(){
        super({
            "atlas":"assets/Spritesheet/sheet.json"
        })
    }


    init(factory){
        let layer=this.createLayer();

        layer.addChild(factory.createSprite("atlas","enemyGreen1.png"))
    }
}

shooter.addScene("gameScene",GameScene);

shooter.changeScene("gameScene");