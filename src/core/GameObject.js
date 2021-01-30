import { CommonTools } from "./CommonTools.js";
import { EventEmitter } from "./EventEmitter.js";

export class GameObject extends EventEmitter {
  static EVENTS = {
    DESTROYED: "destroyed",
    CLICK: "click",
    RIGHT_CLICK: "right click",
  };

  constructor(pixiElement) {
    this.pixiElement = pixiElement;
    pixiElement.gameObject = this;
    pixiElement.this.forces = [];
    this.components = [];
    this.postUpdateComponent = [];
    this.bump = CommonTools.bump;
  }

  destroy() {
    this.pixiElement.destroy();
    this.pixiElement.gameObject = null;
    this.forces = [];
    this.components = [];
    this.postUpdateComponent = [];
  }

  addComponent(component) {
    component.init(this);
    this.components.push(component);
    return component;
  }

  addPostUpdateComponent(component) {
    this.components.push(component);
    return component;
  }

  addForce(force) {
    this.forces.push(force);
    return force;
  }

  update(delta) {
    for (let i = 0; i < this.components.length; i++) {
      this.components[i].update(this.pixiElement, delta);
    }
    this.resolveForces(delta);
    for (let i = 0; i < this.postUpdateComponent.length; i++) {
      this.postUpdateComponent[i].update(this.pixiElement, delta);
    }
    this.updateForces(delta);
  }

  resolveForces(delta) {
    let resultForce = { x: 0, y: 0 };
    for (let i = 0; i < this.forces.length; i++) {
      resultForce.x += this.forces[i].x;
      resultForce.y += this.forces[i].y;
    }
    this.pixiElement.x += resultForce.x;
    this.pixiElement.y += resultForce.y;
  }

  updateForces(delta) {
    for (let i = 0; i < this.forces.length; i++) this.forces[i].update(delta);
  }

  onClick(callback) {
    this.pixiElement.interactive = true;
    this.pixiElement.on("click", callback);
  }

  onRightClick(callback) {
    this.pixiElement.interactive = true;
    this.pixiElement.on("rightclick", callback);
  }
}
