import { Component, input, Input, Optional, Self } from '@angular/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { OptionModel } from '../models/option.model';

@Component({
  selector: 'app-multi-select',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent extends BaseControlValueAccessor<unknown[]> {
  options = input.required<OptionModel[]>();
  appearance = input<MatFormFieldAppearance>('outline');
  showRequireError = input<boolean>(false);
  label = input<string>('');

  override writeValue(obj: unknown[]): void {
    this._value = obj ?? [];
  }

  onSelectionChange(event: MatSelectChange): void {
    this._value = event.value || [];
    this.onChange(this._value);
    this.onTouched();
  }
}
