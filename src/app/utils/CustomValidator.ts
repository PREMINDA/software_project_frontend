import {AbstractControl, ValidationErrors} from '@angular/forms';

export class MatchValidator {
  // (group: AbstractControl) is the form group but needs to be AbstractControl instead of (group: FormGroup) to remove deprecation warning.
  static validate(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notMatching: true }
  };
}
