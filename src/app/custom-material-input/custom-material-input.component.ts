import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
} from '@angular/core';
import {
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
import { BaseControlValueAccessor } from '../models/base-control-value-accessor';

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
export class CustomMaterialInputComponent extends BaseControlValueAccessor<string> {
  matcher = inject(ErrorStateMatcher);

  value = '';
  label = input.required<string>();
  type = input<InputTypes>('text');
  appearance = input<MatFormFieldAppearance>('outline');
  placeholder = input<string>();

  constructor() {
    super();
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
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
