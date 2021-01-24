import {Scene} from "../structure/Scene.js";
import { CommonTools } from "./CommonTools.js";
import { Frite } from "./Frite.js";
import {PIXIFactory} from "./PIXIFactory.js";

export class App extends PIXI.Application{

    constructor(options){
        super(options);
        document.body.appendChild(this.view);
        this.scenes={};
        this.ticker.add(this.update.bind(this));
        this.currentScene=null;
        // this.pixiFactory=new PIXIFactory(this.loader);

        Frite.pixiFactory=new PIXIFactory(this.loader);
        this.loader.onComplete.add(()=>{
            this.stage.addChild(this.currentScene.pixiElement);
            
            this.currentScene.init(this.pixiFactory);
            this.currentScene.initialized=true;
        });

        CommonTools.mouse.pixiInstance=this;
        CommonTools.mouse.init();
    }

    // createScene(name,resources){
    //     var scene=new Scene(resources);
    //     this.scenes[name]=scene;
    //     return scene;
    // }

    addScene(name,scene){
        this.scenes[name]=scene;
    }

    changeScene(sceneName){
        if(this.currentScene){
            this.currentScene.destroy();
            this.loader.resources={};
        }

        this.currentScene=new this.scenes[sceneName]();
        this.currentSceneName=sceneName;
        for(var key in this.currentScene.resources){
            this.loader.add(key,this.currentScene.resources[key]);
        }
       
        
        this.loader.load();
    }

    update(delta){
        if(this.currentScene && this.currentScene.initialized)this.currentScene.update(delta);
    }
}