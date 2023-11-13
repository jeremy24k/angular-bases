import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { heroesComponent } from './heroes/heroes.module';
import { counterModule } from './counter/counter.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModule,
    heroesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
