import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

  static shouldBeValid(control: AbstractControl): ValidationErrors | null {
    if(control.value !== '1234') return {
      shouldBeValid: true
    }
    return null;
  }

  static shouldBeMatched(control: AbstractControl): ValidationErrors | null {
    let confirm = control.get('confirm_password')?.value;
    let newOne = control.get('new_password')?.value;
    if(confirm === newOne) return {
      shouldBeMatched: true
    };

    return null;
  }
}
