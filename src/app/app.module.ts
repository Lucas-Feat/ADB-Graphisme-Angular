import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { PreviewCarouselComponent } from './header/preview-carousel/preview-carousel.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { ServicesComponent } from './main/services/services.component';
import { AProposComponent } from './main/a-propos/a-propos.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { FormComponent } from './contact-page/form/form.component';
import { DescriptionComponent } from './contact-page/description/description.component';
import { ContactHeaderComponent } from './contact-page/contact-header/contact-header.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PreviewCarouselComponent,
    ScrollToTopComponent,
    MainComponent,
    ContactComponent,
    ServicesComponent,
    AProposComponent,
    PortfolioComponent,
    FormComponent,
    DescriptionComponent,
    ContactHeaderComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
