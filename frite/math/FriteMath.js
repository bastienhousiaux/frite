export class FriteMath{
    static clamp(min,max,value){
        return value<min?min:valye>max?max:value;
    }

    static clampMax(max,value){
        return value>max?max:value;
    }

    static clampMin(min,value){
        return value<min?min:value;
    }
}