import {NgModule, Type} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from "@shared/component/footer/footer.component";
import {HeaderComponent} from "@shared/component/header/header.component";
import {NavComponent} from "@shared/component/nav/nav.component";
import {PreviewCarouselComponent} from "@shared/component/preview-carousel/preview-carousel.component";
import {ScrollToTopComponent} from "@shared/component/scroll-to-top/scroll-to-top.component";
import {PortfolioComponent} from "@shared/component/portfolio/portfolio.component";
import {ContactHeaderComponent} from "@shared/component/contact-header/contact-header.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {CommonModule} from "@angular/common";

const COMPONENTS: Type<any>[] = [
  FooterComponent,
  HeaderComponent,
  NavComponent,
  PreviewCarouselComponent,
  ScrollToTopComponent,
  PortfolioComponent,
  ContactHeaderComponent,
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
