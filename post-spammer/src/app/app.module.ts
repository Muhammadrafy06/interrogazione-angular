import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpamVisualizerComponent } from './spam-visualizer/spam-visualizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpamVisualizerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
