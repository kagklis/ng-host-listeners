import { Component, ElementRef, HostListener } from '@angular/core';
import { ChangeDetectionVisualizer } from '../services/change-detection-visualizer.service';

@Component({
  selector: 'app-bad-box',
  templateUrl: './bad-box.component.html',
  styleUrls: ['./bad-box.component.scss'],
})
export class BadBoxComponent {
  constructor(
    private elRef: ElementRef,
    private cdv: ChangeDetectionVisualizer
  ) {}

  public displayChangeDetection(): void {
    this.cdv.displayChangeDetection(this.elRef);
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    console.log('Bad box');
  }
}
