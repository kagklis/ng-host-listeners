import { NgModule } from '@angular/core';
import { BrowserModule, EventManager } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoodTileComponent } from './good-tile/good-tile.component';
import { BadTileComponent } from './bad-tile/bad-tile.component';
import { CustomEventManager } from './services/custom-event-manager';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GoodTileComponent, BadTileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: EventManager,
      useClass: CustomEventManager,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
