import { Component, input, Input } from '@angular/core';
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { OptionModel } from '../models/option.model';

@Component({
  selector: 'app-single-select',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss',
})
export class SingleSelectComponent extends BaseControlValueAccessor<any> {
  options = input.required<OptionModel[]>();
  showRequireError = input<boolean>(false);
  appearance = input<MatFormFieldAppearance>('outline');
  onSelectionChange(event: MatSelectChange): void {
    this.onTouched();
    this.onChange(event.value);
  }
}
