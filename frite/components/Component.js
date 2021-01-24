import { EventEmitter } from "../core/EventEmitter.js";

export class Component extends EventEmitter{
    /**
     * 
     * @param {{
     *      enabled:boolean=true
     * }} options 
     */
    constructor(options={}){
        super();
        this.enabled=options.enabled!=undefined?true:options.enabled;
    }

    /**
     * 
     * @param {GameObject} gameObject 
     */
    init(gameObject){
        
    }

    enabled(){
        this.enabled=true;
    }

    disable(){
        this.enabled=false;
    }

    update(){
        console.warn("update unimplemented");
    }
}