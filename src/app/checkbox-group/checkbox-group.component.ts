// checkbox-group.component.ts
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxModule,
  MatCheckboxChange,
} from '@angular/material/checkbox';
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';
import { MatError } from '@angular/material/form-field';
import { OptionModel } from '../models/option.model';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatCheckboxModule, MatError],
})
export class CheckboxGroupComponent extends BaseControlValueAccessor<
  unknown[]
> {
  options = input<OptionModel[]>();
  showRequireError = input<boolean>(false);

  constructor() {
    super();
  }

  onCheckboxChange(
    optionValue: unknown,
    event: MatCheckboxChange
  ): void {
    const checked = event.checked;
    const current: any[] = this._value || [];
    if (checked) {
      this._value = [...current, optionValue];
    } else {
      this._value = current.filter((v) => v !== optionValue);
    }
    this.onChange(this._value);
    this.onTouched();
  }
}
