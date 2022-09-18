import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CgvComponent} from "@shared/component/cgv/cgv.component";
import {MentionsLegalesComponent} from "@shared/component/mentions-legales/mentions-legales.component";

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
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
    path: 'mentions-legales',
    component: MentionsLegalesComponent
  },
  {
    path: 'cgv',
    component: CgvComponent
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
