import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
}

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: (): Promise<any> => import('./main/main.module').then((value: any) => value.MainModule)
  },
  {
    path: 'contact',
    loadChildren: (): Promise<any> => import('./contact/contact.module').then((value: any) => value.ContactModule)
  },
  {
    path: 'portfolio',
    loadChildren: (): Promise<any> => import('./portfolio/portfolio.module').then((value: any) => value.PortfolioModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/accueil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
