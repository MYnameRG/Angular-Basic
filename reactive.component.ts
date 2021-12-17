import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: any = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotUseWhiteSpace
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    }),

  });

  get username() {
    return this.form.get('account.username');
  }

  submit() {
    // Suppose you got an error from server
    // let isvalid = service.login(this.form.value)
    this.form.setErrors({
      invalidLogin: true
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
