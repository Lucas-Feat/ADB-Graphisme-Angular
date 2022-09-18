import {NgModule, Type} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from "@shared/component/footer/footer.component";
import {HeaderComponent} from "@shared/component/header/header.component";
import {ScrollToTopComponent} from "@shared/component/scroll-to-top/scroll-to-top.component";
import {PortfolioComponent} from "@shared/component/portfolio/portfolio.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {CommonModule} from "@angular/common";
import {CarouselComponent} from "@shared/component/carousel/carousel.component";
import {ContactHeaderComponent} from "@shared/component/contact-header/contact-header.component";
import {HamburgerMenuComponent} from "@shared/component/hamburger-menu/hamburger-menu.component";
import {NavComponent} from "@shared/component/nav/nav.component";
import {CgvComponent} from "@shared/component/cgv/cgv.component";
import {MentionsLegalesComponent} from "@shared/component/mentions-legales/mentions-legales.component";

const COMPONENTS: Type<any>[] = [
  FooterComponent,
  HeaderComponent,
  ScrollToTopComponent,
  PortfolioComponent,
  ContactHeaderComponent,
  CarouselComponent,
  ContactHeaderComponent,
  HamburgerMenuComponent,
  NavComponent,
  CgvComponent,
  MentionsLegalesComponent
];

const DIRECTIVES: Type<any>[] = [];

const PIPES: Type<any>[] = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    RouterModule,
    CarouselModule,
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
})
export class SharedModule {
}
