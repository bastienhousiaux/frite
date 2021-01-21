import { Keyboard } from "../plugins/Keyboard.js";
import { Mouse } from "../plugins/Mouse.js";

export var CommonTools={
    bump:new Bump(PIXI),
    keyboard:new Keyboard(),
    mouse:new Mouse()
}