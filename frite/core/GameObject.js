import { Vector2 } from "../math/Vector2.js";
import { CommonTools } from "./CommonTools.js";

export class GameObject{

    constructor(pixiElement){
        this.pixiElement=pixiElement;
        pixiElement.gameObject=this;
        this.forces=[];
        this.components=[];
        this.postUpdateComponent=[];
        this.bump=CommonTools.bump;
    }

    hitTest(colliders){
        
        this.bump.hit(this.pixiElement,colliders,true,true);
    }

    destroy(){
        this.pixiElement.destroy();
        this.pixiElement.gameObject=null;
        this.forces=[];
        this.components=[];
        this.postUpdateComponent=[];
        
    }

    addComponent(component){
        this.components.push(component);
        component.init(this);
        return component;
    }

    addPostUpdateComponent(component){
        this.components.push(component);
        return component;
    }

    addForce(force){
        this.forces.push(force);
        return force;
    }

    update(delta){
        for(let i=0;i<this.components.length;i++){
            this.components[i].update(this.pixiElement);
        }
        this.resolveForces(delta);
        for(let i=0;i<this.postUpdateComponent.length;i++){
            this.postUpdateComponent[i].update(this.pixiElement);
        }
    }

    resolveForces(delta){
        let resultForce=Vector2.fromXY(0,0);
        for(let i=0;i<this.forces.length;i++){
            resultForce.add(this.forces[i]);
        }
        this.pixiElement.x+=resultForce.x;
        this.pixiElement.y+=resultForce.y;
    }

    onClick(callback){
        this.pixiElement.interactive=true;
        this.pixiElement.on('click',callback);
    }

    onRightClick(callback){
        this.pixiElement.interactive=true;
        this.pixiElement.on('rightclick',callback);
    }
}