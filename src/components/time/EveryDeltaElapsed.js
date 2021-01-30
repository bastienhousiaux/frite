import { Component } from "../Component.js";

export class EveryDeltaElapsed extends Component {
  /**
   *
   * @param {{
   * deltaInterval:number,
   * callback?:function,
   * disableAfterCompleted:boolean=false
   * }} options
   */
  constructor(options) {
    super();
    this.validateOptions(options, ["deltaInterval"], {
      callback: null,
      disableAfterCompleted: false,
    });
    this.deltaInterval = options.deltaInterval;
    this.cumulatedDelta = 0;
    this.callback = options.callback;
    this.disableAfterCompleted =
      options.disableAfterCompleted != undefined
        ? options.disableAfterCompleted
        : false;
  }

  update(target, delta) {
    this.cumulatedDelta += delta;
    if (this.cumulatedDelta >= this.deltaInterval) {
      if (!this.pauseAfterCompleted) {
        this.cumulatedDelta -= this.deltaInterval;
      } else {
        this.cumulatedDelta = 0;
        this.enabled = false;
      }
      if (this.callback) this.callback(target);
    }
  }
}
