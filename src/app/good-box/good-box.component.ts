import { Component, ElementRef, HostListener } from '@angular/core';
import { ChangeDetectionVisualizer } from '../services/change-detection-visualizer.service';
import { EVENT_SUFFIX } from '../services/custom-event-manager';

@Component({
  selector: 'app-good-box',
  templateUrl: './good-box.component.html',
  styleUrls: ['./good-box.component.scss'],
})
export class GoodBoxComponent {
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private cdv: ChangeDetectionVisualizer
  ) {}

  public displayChangeDetection(): void {
    this.cdv.displayChangeDetection(this.elRef);
  }

  @HostListener('document:click' + EVENT_SUFFIX, ['$event'])
  onClick() {
    console.log('Good box');
  }
}
