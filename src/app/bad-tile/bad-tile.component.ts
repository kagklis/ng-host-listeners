import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { ChangeDetectionVisualizer } from '../services/change-detection-visualizer.service';

@Component({
  selector: 'app-bad-tile',
  templateUrl: './bad-tile.component.html',
  styleUrls: ['./bad-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadTileComponent {
  @Input() isFacedUp!: boolean;

  constructor(
    private elRef: ElementRef,
    private cdv: ChangeDetectionVisualizer
  ) {}

  public displayChangeDetection(): void {
    this.cdv.displayChangeDetection(this.elRef);
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    console.log('Un-optimized');
    if (this.isFacedUp) {
      this.isFacedUp = false;
    }
  }
}
