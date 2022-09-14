import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "@shared/shared.module";
import {initializeApp, FirebaseApp} from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore';
import {CommonModule, registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {ConfigService} from "@core/service/config.service";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {NgxFirestoreRepositoryModule, FIRESTORE_APP} from "@paddls/ngx-firestore-repository";
import {NgxRepositoryModule} from "@paddls/ngx-repository";
import {FIREBASE_APP} from "@core/firebase/firebase-app.di";

export function getConfig(configService: ConfigService): () => Promise<any> {
  return (): Promise<any> => configService.getFirebaseConfig().toPromise();
}

export function createFirebaseApp(configService: ConfigService): FirebaseApp {
  return initializeApp(configService.getFirebaseConfigSync());
}

export function initializeFirestore(app: FirebaseApp): Firestore {
  return getFirestore(app);
}

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    NgxFirestoreRepositoryModule.forRoot(),
    NgxRepositoryModule.forRoot(),
    SharedModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: FIREBASE_APP,
      useFactory: createFirebaseApp,
      deps: [ConfigService]
    },
    {
      provide: FIRESTORE_APP,
      useFactory: initializeFirestore,
      deps: [FIREBASE_APP]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: getConfig,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
