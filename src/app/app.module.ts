import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CompanyListComponent,
    NavigationComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
