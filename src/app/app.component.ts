import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count = 20;
  public countArray = Array.from(Array(this.count).keys());

  public valueChanged(value: string): void {
    this.count = +value;
    this.countArray = Array.from(Array(this.count).keys());
  }
}
