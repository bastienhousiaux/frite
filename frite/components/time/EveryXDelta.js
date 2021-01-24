import { Component } from "../Component.js";

export class EveryXDelta extends Component{
    constructor(deltaInterval,callback) {
        super();
        this.deltaInterval=deltaInterval;
        this.cumulatedDelta=0;
        this.callback=callback;
    }

    update(target,delta){
        this.cumulatedDelta+=delta;
        if(this.cumulatedDelta>=this.deltaInterval){
            this.cumulatedDelta-=this.deltaInterval;
            this.callback(target);
        }
    }
}