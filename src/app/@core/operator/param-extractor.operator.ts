import {Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';
import {ifNotNull, softCache} from '@paddls/rxjs-common';

export function paramExtractor(field: string): any {
  return (source$: Observable<any>) => {
    return source$.pipe(
      pluck(field),
      ifNotNull(),
      map((id: string) => id ? id : null),
      softCache()
    );
  };
}
