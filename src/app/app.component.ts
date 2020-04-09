import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    form.reset({
      subscription: this.subscriptions[1]
    });
  }
}
