import { PasswordValidator } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {

  form: any = new FormGroup({
    old_password: new FormControl('', [Validators.required, PasswordValidator.shouldBeValid]),
    new_password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required, PasswordValidator.shouldBeMatched])
  });

  get oldPassword() {
    return this.form.get('old_password');
  }

  get newPassword() {
    return this.form.get('new_password');
  }

  get confirmPassword() {
    return this.form.get('confirm_password');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
