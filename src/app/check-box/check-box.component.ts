import { Component, input } from '@angular/core';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';
import { MatError } from '@angular/material/form-field';
import { OptionModel } from '../models/option.model';

@Component({
  selector: 'app-check-box',
  imports: [MatCheckboxModule, MatError],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
})
export class CheckBoxComponent extends BaseControlValueAccessor<boolean> {
  option = input.required<OptionModel>();
  showRequireError = input<boolean>(false);

  constructor() {
    super();
  }
  onCheckboxChange(event: MatCheckboxChange): void {
    const checked = event.checked;
    if (checked) {
      this._value = true;
    } else {
      this._value = false;
    }
    this.onChange(this._value);
    this.onTouched();
  }
}
