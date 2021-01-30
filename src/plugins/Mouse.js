export class Mouse{
    constructor(){
        this.pixiInstance=undefined;
        this.leftStatus=false;
        this.rightStatus=false;
        this.middleStatus=false;
        
    }

    init(){
        this.pixiInstance.renderer.view.onclick=(evt)=>{
            if(this.onLeftClickCallback)this.onLeftClickCallback(evt);
        };

        this.pixiInstance.renderer.view.onwheel=(evt)=>{
            if(evt.deltaY<0){
                if(this.onWheelUpCallback)this.onWheelUpCallback(evt);
            }else{
                if(this.onWheelDownCallback)this.onWheelDownCallback(evt);
            }
        }


        this.pixiInstance.renderer.view.oncontextmenu=(evt)=>{
            if( this.onRightClickCallback) this.onRightClickCallback(evt);
            evt.preventDefault();
        }

        this.pixiInstance.renderer.view.onmousedown=(evt)=>{
            switch(evt.button){
                case 0:
                    this.leftStatus=true;
                    break;
                case 1:
                    this.middleStatus=true;
                    evt.preventDefault();
                    break;
                case 2:
                    this.rightStatus=true;
                    break;   
            }
        }

        this.pixiInstance.renderer.view.onmouseup=(evt)=>{
            switch(evt.button){
                case 0:
                    this.leftStatus=false;
                    break;
                case 1:
                    this.middleStatus=false;
                    break;
                case 2:
                    this.rightStatus=false;
                    break;   
            }
        }

    }

    setCursorImage(urlImage){
       // Css style for icons
    const defaultIcon = "url('assets/b2.png'),auto";
    const hoverIcon = "url('assets/b2.png'),auto";

    // Add custom cursor styles
    this.pixiInstance.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
    this.pixiInstance.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
    }

    hide(){
        this.pixiInstance.renderer.plugins.interaction.cursorStyles.default='none';
        this.pixiInstance.renderer.plugins.interaction.setCursorMode('none');
    }

    get x(){
        return this.pixiInstance.renderer.plugins.interaction.mouse.global.x;
    }

    get y(){
        return this.pixiInstance.renderer.plugins.interaction.mouse.global.y;
    }

    onLeftClick(callback){
       this.onLeftClickCallback=callback;
    }

    onRightClick(callback){
        this.onRightClickCallback=callback;
    }

    onWheelDown(callback){
        this.onWheelDownCallback=callback;
    }

    onWheelUp(callback){
        this.onWheelUpCallback=callback;
    }

    isLeftDown(){
        return this.leftStatus;
    }

    isLeftUp(){
        return !this.leftStatus;
    }

    isRightDown(){
        return this.rightStatus;
    }

    isRightUp(){
        return !this.leftStatus;
    }

    isMiddleDown(){
        return this.middleStatus;
    }

    isMiddleUp(){
        return this.middleStatus;
    }
}