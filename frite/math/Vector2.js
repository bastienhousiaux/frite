export class Vector2{

    /**
     * 
     * @param {{
     *      x?:number,
     *      y?:number,
     *      length?:number,
     *      angle?:number
     * }} options 
     */
    constructor(options){
        if(options.x!=undefined && options.y!=undefined){
            this._x=options.x;
            this._y=options.y;
            this._computeLengthAndAngle();
        }else{
            if(options.length!=undefined && options.angle!=undefined){
                this._length=options.length;
                this._angle=options.angle;
                this._computeXY();
            }else{
                console.error("a Vector 2 should always be declared with either x,y or length/angle couple");
            }
        }
    }

    static fromXY(x,y){
        return new Vector2({x:x,y:y});
    }

    static fromAngle(angle,length){
        return new Vector2({angle:angle,length:length});
    }
    
    set angle(angle){
        this._angle=angle;
        this._computeXY();
    }

    set length(length){
        this._length=length;
        this._computeXY();
    }

    set x(x){
        this._x=x;
        this._computeLengthAndAngle();
    }

    set y(y){
        this._y=y;
        this._computeLengthAndAngle();
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get angle(){
        return this._y;
    }

    get length(){
        return this._length;
    }

    _computeXY(){
        let radianAngle=this._angle*Math.PI/180;
        this._x=+(Math.cos(radianAngle)*this.length);
        this._y=+(Math.sin(radianAngle)*this.length);
    }

    _computeLengthAndAngle(){
        this._length=+Math.sqrt(this.x*this.x+this.y*this.y);
        this._angle=(this.x==0 && this.y==0)?0:+(Math.atan(this.y/this.x)*180/Math.PI);
    }

    add(vector2){
        this._x+=vector2.x;
        this._y+=vector2.y;
        this._computeLengthAndAngle();
    }

}