import { Component, Input } from '@angular/core';
import { Company } from 'src/Company';

@Component({
  selector: 'company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
})
export class CompanyItemComponent {
  @Input() company?: Company;
  getUrl() {
    return `/detail/${this.company?.id}`;
  }
}
