import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable } from 'rxjs';

export type RouteSnapshot = Pick<ActivatedRouteSnapshot, 'params' | 'queryParams' | 'url'>;

@Injectable({
  providedIn: 'root',
})
export class RouterEventsService {
  private snapshotSource = new BehaviorSubject<RouteSnapshot>({
    params: {},
    queryParams: {},
    url: [],
  });

  constructor(private router: Router) {
    this.subscribeToRouterEvents();
  }

  selectParams(name: string): Observable<string> {
    return this.snapshotSource.pipe(
      map((snapshot) => snapshot.params[name]),
      distinctUntilChanged(),
    );
  }

  selectQueryParams(name: string): Observable<string> {
    return this.snapshotSource.pipe(
      map((snapshot) => snapshot.queryParams[name]),
      distinctUntilChanged(),
    );
  }

  selectUrl(name: string): Observable<UrlSegment[]> {
    return this.snapshotSource.pipe(map((snapshot) => snapshot.url));
  }

  private subscribeToRouterEvents() {
    this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd),
        map((event) => (event as ActivationEnd).snapshot),
        filter((snapshot) => !!snapshot.routeConfig?.path),
        map(({ params, queryParams, url }) => ({
          params,
          queryParams,
          url,
        })),
      )
      .subscribe(this.snapshotSource);
  }
}
