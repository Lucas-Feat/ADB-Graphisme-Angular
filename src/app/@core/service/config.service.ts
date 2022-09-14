import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly firebaseConfig$: Observable<any>;

  private firebaseConfig: any;

  public constructor() {
    this.firebaseConfig$ = of(environment).pipe(
      tap((firebaseConfig: { firebase: any }) => this.firebaseConfig = firebaseConfig.firebase)
    );
  }

  public getFirebaseConfig(): Observable<any> {
    return this.firebaseConfig$;
  }

  public getFirebaseConfigSync(): any {
    return this.firebaseConfig;
  }
}
