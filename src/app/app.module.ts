import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, CompanyListComponent, NavigationComponent, CompanyYandexMapComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
