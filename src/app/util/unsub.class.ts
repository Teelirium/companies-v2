import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class Unsub implements OnDestroy {
  unsub$ = new Subject<void>();

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
