// radio-group.component.ts
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
  Optional,
  Self,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';
import { MatError } from '@angular/material/form-field';
import { OptionModel } from '../models/option.model';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [CommonModule, MatRadioModule, MatError],
})
export class RadioGroupComponent extends BaseControlValueAccessor<string> {
  options = input.required<OptionModel[]>();

  onSelectionChange(event: MatRadioChange): void {
    this.onTouched();
    this.onChange(event.value);
  }
}
