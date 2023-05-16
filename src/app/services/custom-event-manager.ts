import { Inject, Injectable, NgZone } from '@angular/core';
import { EVENT_MANAGER_PLUGINS, EventManager } from '@angular/platform-browser';

const DELIMITER = '#';
const SUFFIX = 'outer-zone';
export const EVENT_SUFFIX = DELIMITER + SUFFIX;

@Injectable()
export class CustomEventManager extends EventManager {
  constructor(
    @Inject(EVENT_MANAGER_PLUGINS) plugins: any[],
    private ngZone: NgZone
  ) {
    super(plugins, ngZone);
  }

  override addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function {
    if (eventName.endsWith(SUFFIX)) {
      eventName = eventName.split(DELIMITER)[0];
      return this.ngZone.runOutsideAngular(() =>
        super.addEventListener(element, eventName, handler)
      );
    }
    return super.addEventListener(element, eventName, handler);
  }
}
