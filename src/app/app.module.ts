import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SubCatalogueComponent } from './components/sub-catalogue/sub-catalogue.component';
import { DetailsComponent } from './components/details/details.component';
import { AppRouteModule } from './services/approuter';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    SubCatalogueComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
