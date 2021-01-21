import {CommonTools} from '../../core/CommonTools.js';
import { Component } from '../Component.js';

export class SolidCollision extends Component{
    constructor(colliders){
        super();
        this.colliders=colliders.map((value)=>value.pixiElement);
    }

    update(target){
        target.gameObject.hitTest(this.colliders);
    }
}