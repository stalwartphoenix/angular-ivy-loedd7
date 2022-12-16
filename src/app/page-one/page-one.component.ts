import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent implements OnInit {
  pageOneTabForm: UntypedFormGroup;
  titleFormControl: UntypedFormControl;

  constructor() {
    this.titleFormControl = new UntypedFormControl('', [
      Validators.required,
      Validators.maxLength(255),
      this.noWhitespaceValidator,
    ]);
  }

  ngOnInit(): void {}

  /**
   * Checks a form control's value for whitespace
   *
   * @param formControl Form control to validate
   */
  public noWhitespaceValidator(
    formControl: UntypedFormControl
  ): { [key: string]: boolean } | null {
    const isWhitespace = (formControl.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  /**
   * Determines whether the is-invalid class should be applied to the provided
   * control.  The class is applied when the control is invalid and has been touched.
   *
   * @param control Control to check the touched, dirty and valid state for.
   */
  showAsInvalid(control: UntypedFormControl): boolean {
    if ((control.touched || control.dirty) && !control.valid) {
      return true;
    } else {
      return false;
    }
  }
}
