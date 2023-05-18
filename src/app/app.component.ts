import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count = 50;
  public countArray = Array.from(Array(this.count).keys());
  public faceUpTile = this.getRandomTile(0, this.count);

  public valueChanged(value: string): void {
    this.count = +value;
    this.countArray = Array.from(Array(this.count).keys());
    this.faceUpTile = this.getRandomTile(0, this.count);
  }

  private getRandomTile(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
