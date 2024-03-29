import {NgModule} from '@angular/core';
import {SharedModule} from "@shared/shared.module";
import {AProposComponent} from "./component/a-propos/a-propos.component";
import {ContactComponent} from "./component/contact/contact.component";
import {MainComponent} from "./component/main/main.component";
import {ServicesComponent} from "./component/services/services.component";
import {MainRoutingModule} from "./main-routing.module";
import {CarouselModule} from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    AProposComponent,
    ContactComponent,
    MainComponent,
    ServicesComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    CarouselModule,
  ],
})
export class MainModule {
}
