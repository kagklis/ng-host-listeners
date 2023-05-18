import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
} from '@angular/core';
import { ChangeDetectionVisualizer } from '../services/change-detection-visualizer.service';
import { EVENT_SUFFIX } from '../services/custom-event-manager';

@Component({
  selector: 'app-good-tile',
  templateUrl: './good-tile.component.html',
  styleUrls: ['./good-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodTileComponent {
  @Input() isFacedUp!: boolean;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private cdv: ChangeDetectionVisualizer,
    private ngZone: NgZone
  ) {}

  public displayChangeDetection(): void {
    this.cdv.displayChangeDetection(this.elRef);
  }

  @HostListener('document:click' + EVENT_SUFFIX, ['$event'])
  onClick() {
    console.log('Optimized');
    if (this.isFacedUp) {
      this.ngZone.run(() => {
        this.isFacedUp = false;
      });
    }
  }
}
