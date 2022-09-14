import {NgModule} from '@angular/core';
import {ContactPageComponent} from "./component/contact-page.component";
import {DescriptionComponent} from "./description/description.component";
import {FormComponent} from "./form/form.component";
import {SharedModule} from "@shared/shared.module";
import {ContactRoutingModule} from "./contact-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FormComponent,
    DescriptionComponent,
    ContactPageComponent,
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class ContactModule {
}
