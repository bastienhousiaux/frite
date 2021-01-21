export class Component{
    /**
     * 
     * @param {{
     *      enabled:boolean=true
     * }} options 
     */
    constructor(options={}){
        this.enabled=options.enabled!=undefined?true:options.enabled;
    }

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