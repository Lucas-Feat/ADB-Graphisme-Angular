import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainComponent } from './main/main.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
