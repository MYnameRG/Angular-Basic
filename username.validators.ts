import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotUseWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if(control.value.includes(" ")) return {
      cannotUseWhiteSpace: true
    };
    return null;
  }

  // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
  //   setTimeout(() => {
  //     if(control.value === 'hello') {
  //       return {
  //         shouldBeUnique: true
  //       };
  //     }
  //     return null;
  //   }, 2000);

  //   return null;
  // }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'hello') {
          resolve({
            shouldBeUnique: true
          });
        }
        else resolve(null);
      }, 2000);
    });
  }
}
