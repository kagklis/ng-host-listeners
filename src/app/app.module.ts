import { NgModule } from '@angular/core';
import { BrowserModule, EventManager } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoodBoxComponent } from './good-box/good-box.component';
import { BadBoxComponent } from './bad-box/bad-box.component';
import { CustomEventManager } from './services/custom-event-manager';

@NgModule({
  declarations: [AppComponent, GoodBoxComponent, BadBoxComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: EventManager,
      useClass: CustomEventManager
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
