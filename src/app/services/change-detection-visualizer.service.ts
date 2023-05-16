import { ElementRef, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeDetectionVisualizer {
  constructor(private zone: NgZone) {}

  public displayChangeDetection(elementRef: ElementRef): void {
    this.zone.runOutsideAngular(() => {
      elementRef.nativeElement.classList.add('triggered');
      setTimeout(() => {
        elementRef.nativeElement.classList.remove('triggered');
      }, 1000);
    });
  }
}
