export class Keyboard{

    constructor(){
        this.keyStatus={};

        this.onKeyPressedCallbacks={};

        window.onkeydown=(evt)=>{
            this.keyStatus[evt.keyCode]=true;
            if(this.onKeyPressedCallbacks[evt.keyCode])
                for(let i=0;i<this.onKeyPressedCallbacks[evt.keyCode].length;i++)
                    this.onKeyPressedCallbacks[evt.keyCode][i]();
        };

        window.onkeyup=(evt)=>{
            this.keyStatus[evt.keyCode]=false;
        }
    }

    isKeyDown(keyCode){
        return this.keyStatus[keyCode];
    }

    isKeyUp(keyCode){
        return this.keyStatus[keyCode]==true;
    }

    charFromKeyCode(keyCode){
        return String.fromCharCode(key);
    }

    keyCodeFromChar(char){
        return char.charCodeAt(0);
    }

    onKeyPressed(keyCode,callback){
        if(this.onKeyPressedCallbacks[keyCode]==undefined)this.onKeyPressedCallbacks[keyCode]=[];
        this.onKeyPressedCallbacks[keyCode].push(callback);
    }
}