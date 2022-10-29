import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ArgoniusUiModule} from 'argonius-ui'

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArgoniusUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
