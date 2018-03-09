import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import {BrandImageComponent} from './brand-image/brand-image.component';
import {CurrencySelectionComponent} from './currency-selection/currency-selection.component';



@NgModule({
  declarations: [
    AppComponent,
    BrandImageComponent,
    CurrencySelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
