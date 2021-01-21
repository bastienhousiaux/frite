export class Vector2{

    constructor(){
    }

    static fromXY(x,y){
        let vector2=new Vector2();
        vector2.x=+x;
        vector2.y=+y;
        vector2.computeLengthAndAngle();
        return vector2;
    }

    static fromAngle(angle,length){
        let vector2=new Vector2();
        vector2.angle=+angle;
        vector2.length=+length;
        vector2.computeXY();
        return vector2;
    }

    setAngle(angle){
        this.angle=angle;
        this.computeXY();
    }

    setLength(length){
        this.length=length;
        this.computeXY();
    }

    setX(x){
        this.x=x;
        this.computeLengthAndAngle();
    }

    setY(y){
        this.y=y;
        this.computeLengthAndAngle();
    }

    computeXY(){
        let radianAngle=this.angle*Math.PI/180;
        this.x=+(Math.cos(radianAngle)*this.length);
        this.y=+(Math.sin(radianAngle)*this.length);
    }

    computeLengthAndAngle(){
        this.length=+Math.sqrt(this.x*this.x+this.y*this.y);
        this.angle=+(Math.atan(this.y/this.x)*180/Math.PI);
    }

    add(vector2){
        this.x+=vector2.x;
        this.y+=vector2.y;
    }

}