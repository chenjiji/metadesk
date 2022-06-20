import BaseRole from './BaseRole';
import * as PIXI from 'pixi.js';
import * as TWEEN from '@tweenjs/tween.js';
import { animate } from './roleUtils';

export default class TeresaJuarezRole extends BaseRole<PIXI.AnimatedSprite> {
  constructor(
    app: PIXI.Application,
    resources: string[] | string,
    position: PIXI.IPointData,
  ) {
    super(app, resources, position);
    this.getInstance().interactive = true;
  }

  public move() {
    const sprite = this.getInstance();

    new TWEEN.Tween(sprite)
      .to({ x: 670, y: 480 }, 1000)
      .onStart(() => sprite.play())
      .onComplete(() => setTimeout(() => sprite.stop(), 300))
      .start();
    animate();
  }

  public bind<E>(event: string, fn: (event: E) => unknown) {
    this.getInstance().on(event, fn);
  }
}
