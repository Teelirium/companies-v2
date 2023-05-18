import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

type HttpOptions = Parameters<HttpClient['get']>[1];

@Injectable({
  providedIn: 'root',
})
export class CachedHttpClient {
  #cache = new Map<string, [Date, any]>();
  constructor(private http: HttpClient) {}

  getCached<T>(
    url: string,
    staleTime: number = 1000 * 60,
    options?: HttpOptions
  ): Observable<T> {
    const cached = this.#cache.get(url);
    if (!cached || cached[0].getTime() < Date.now()) {
      return this.refetch(url, staleTime, options);
    }
    return of(cached[1] as T);
  }

  refetch<T>(
    url: string,
    staleTime: number = 1000 * 60,
    options?: HttpOptions
  ): Observable<T> {
    this.#cache.delete(url);
    return this.http
      .get<T>(url, options)
      .pipe(
        tap((data) =>
          this.#cache.set(url, [new Date(Date.now() + staleTime), data])
        )
      );
  }
}
