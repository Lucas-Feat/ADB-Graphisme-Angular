import {NgModule} from '@angular/core';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SharedModule} from "@shared/shared.module";
import {PortfolioPageComponent} from "./component/portfolio-page.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PortfolioPageComponent
  ],
  imports: [
    SharedModule,
    CarouselModule,
    PortfolioRoutingModule,
    CommonModule,
  ],
})
export class PortfolioModule {
}
