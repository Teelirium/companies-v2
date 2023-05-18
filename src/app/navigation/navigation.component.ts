import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  #id: string | null = null;
  constructor(public router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.#id = this.route.snapshot.paramMap.get('id');
  }
}
