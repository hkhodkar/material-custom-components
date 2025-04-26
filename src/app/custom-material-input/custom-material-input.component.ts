import {
  Component,
  forwardRef,
  Input,
  Optional,
  Self,
  ChangeDetectionStrategy,
  OnInit,
  inject,
  input,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './CustomErrorStateMatcher';
import { InputTypes } from '../models/input-types';

@Component({
  selector: 'app-custom-material-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './custom-material-input.component.html',
  styleUrls: ['./custom-material-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher,
    },
  ],
})
export class CustomMaterialInputComponent implements ControlValueAccessor {
  matcher = inject(ErrorStateMatcher);
  ngControl = inject(NgControl, { optional: true, self: true });

  value = '';
  disabled = false;
  label = input.required<string>();
  type = input<InputTypes>('text');
  appearance = input<MatFormFieldAppearance>('outline');
  placeholder = input<string>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control(): FormControl {
    return this.ngControl?.control as FormControl;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.value = input;
    this.onChange(input);
  }

  onBlur() {
    this.onTouched();
  }
}
