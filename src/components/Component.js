import { EventEmitter } from "../core/EventEmitter.js";

export class Component extends EventEmitter {
  /**
   *
   * @param {{
   *      enabled:boolean=true
   * }} options
   */
  constructor(options = {}) {
    super();
    this.enabled = options.enabled != undefined ? true : options.enabled;
  }

  validateOptions(options, ...args) {
    for (let i = 0; i < args.length; i++) {
      if (options[args] == undefined || options[args] == null)
        console.error("the property " + args + " must be defined");
    }
  }

  /**
   *
   * @param {GameObject} gameObject
   */
  init(gameObject) {}

  enabled() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  __doUpdate(target, delta) {
    if (this.enabled) this.update(delta);
  }

  update(target, delta) {
    console.warn("update unimplemented");
  }
}
