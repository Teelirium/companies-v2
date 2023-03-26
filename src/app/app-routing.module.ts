import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'map', component: CompanyYandexMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
