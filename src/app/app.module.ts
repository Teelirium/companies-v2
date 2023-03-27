import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CompanyListComponent,
    NavigationComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanySortComponent,
    OrderByPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
