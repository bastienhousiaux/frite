export class EventEmitter{
    constructor(){
        this.events={};
    }

    on(eventName,callback){
        if(!this.events[eventName])this.events[eventName]=[];
        this.events[eventName].push(callback);
    }

    emit(eventName,...args){
        if(this.events[eventName]){
            for(let i=0;i<this.events[eventName].length;i++){
                this.events[eventName][i](...args);
            }
        }
    }

    off(eventName,callback){
        this.events[eventName].remove(callback);
    }
}