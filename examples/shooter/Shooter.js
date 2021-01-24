import { HeightDirectionMove } from "../../frite/components/moves/HeightDirectionMove.js";
import { LinearMove } from "../../frite/components/moves/LinearMove.js";
import { PropertyModifier } from "../../frite/components/PropertyModifier.js";
import { EveryXDelta } from "../../frite/components/time/EveryXDelta.js";
import { App } from "../../frite/core/App.js";
import { Force } from "../../frite/physics/Force.js";
import {Scene} from "../../frite/structure/Scene.js";

const shooter=new App({
    width: 800, 
    height: 600, 
    backgroundColor: 0x1099bb, 
    resolution: window.devicePixelRatio || 1
});

class GameScene extends Scene{


    backgroundImage;
    constructor(){
        super({
            "player_spaceship":"assets/PNG/playerShip1_red.png",
            "background":"assets/Backgrounds/purple.png",
            "fire":"assets/PNG/Effects/fire03.png"
        })
    }


    init(factory){
        let backgroundLayer=this.createLayer();
        let gameLayer=this.createLayer();
        this.backgroundImage=backgroundLayer.createTilingSprite("background",800,600);
        const spaceship=gameLayer.createSprite("player_spaceship",{x:350,y:500});
        spaceship.addComponent(new HeightDirectionMove({maxSpeed:3,acceleration:0.1,deceleration:0.1}));
        this.backgroundImage.addComponent(new PropertyModifier({propertyName:"tilePosition.y",propertyChanger:0.5}));

        spaceship.addComponent(new EveryXDelta(60,()=>{
            let bullet=gameLayer.createSprite("fire",{x:300,y:700});
            bullet.addForce(new Force({angle:270,length:5}));
        }))
    }

}

shooter.addScene("gameScene",GameScene);

shooter.changeScene("gameScene");