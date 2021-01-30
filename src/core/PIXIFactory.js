// import * as PIXI from "../../node_modules/pixi.js/dist/pixi.js";

export class PIXIFactory {
  constructor(loader) {
    this.loader = loader;
  }

  getTexture(name) {
    return this.loader.resources[name].texture;
  }

  getAtlasTexture(atlas, texture) {
    return this.loader.resources[atlas].textures[texture];
  }
  /**
   *
   * @param { autoStart?: boolean; width?: number; height?: number; view?: HTMLCanvasElement; transparent?: boolean; autoDensity?: boolean; antialias?: boolean; preserveDrawingBuffer?: boolean; resolution?: number; forceCanvas?: boolean; } options
   */
  createApp(options) {
    return new PIXI.Application(options);
  }

  createSpriteFromAtlas(atlasName, textureName, options) {
    let sprite = new PIXI.Sprite(this.getAtlasTexture(atlasName, textureName));
    this._applyOptions(sprite, options);
    return sprite;
  }

  createSprite(textureName, options) {
    let sprite = new PIXI.Sprite(this.getTexture(textureName));
    this._applyOptions(sprite, options);
    console.log(sprite);
    return sprite;
  }

  createTilingSprite(textureName, width, height, options) {
    let tilingSprite = new PIXI.TilingSprite(
      this.getTexture(textureName),
      width,
      height
    );
    this._applyOptions(options);
    return tilingSprite;
  }

  _applyOptions(object, options) {
    for (var key in options) {
      _.set(object, key, options[key]);
    }
    return object;
  }

  createGraphics() {
    return new PIXI.Graphics();
  }

  createRectangle(width, height, color) {
    let graphics = this.createGraphics();
    graphics.beginFill(color);
    graphics.drawRect(0, 0, width, height);
    graphics.endFill();
    return graphics;
  }
}
