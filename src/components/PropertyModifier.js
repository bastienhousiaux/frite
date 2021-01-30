import { Component } from "./Component.js";

export class PropertyModifier extends Component{

    /**
     * 
     * @param {{
     *      propertyName:string || string[],
     *      propertyChanger:number
     *      
     * }} options 
     */
    constructor(options){
        super();
        this.propertyName=options.propertyName;
        this.propertyChanger=options.propertyChanger;
    }

    update(target,delta){
        _.set(target,this.propertyName,_.get(target,this.propertyName)+this.propertyChanger*delta);
    }

}