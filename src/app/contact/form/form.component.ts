import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "@core/service/message.service";
import {Message} from "@core/model/message.model";
import {OnDestroyListener, takeUntilDestroy} from "@paddls/ngx-common";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
@OnDestroyListener()
export class FormComponent {

  public form: FormGroup;
  public isSend: boolean = false;
  public error: boolean = false;

  public constructor(private readonly messageService: MessageService,
                     private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      mail: this.formBuilder.control('', [Validators.required, Validators.email]),
      object: this.formBuilder.control('', Validators.required),
      message: this.formBuilder.control('', Validators.required),
    })
  }

  public submit() {
    if (this.form.invalid) {
      return
    }

    const message = new Message({
      senderName: this.form.controls.name.value,
      senderMail: this.form.controls.mail.value,
      object: this.form.controls.object.value,
      message: this.form.controls.message.value,
      read: false
    })

    this.messageService.create(message).pipe(
      takeUntilDestroy(this)
    ).subscribe(() => {
        this.isSend = true;
      },
      () => {
        this.error = true;
      }
    )
  }

}
