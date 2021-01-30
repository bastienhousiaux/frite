import { GameObject } from "../core/GameObject";

export class Container extends GameObject {
  constructor() {
    super(new PIXI.Container());
  }

  get children() {
    return this.pixiElement.children;
  }
}
