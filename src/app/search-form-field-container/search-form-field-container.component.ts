import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  CustomFormFieldControlComponent,
  FormFieldValue,
} from '../custom-form-field-control/custom-form-field-control.component';

@Component({
  selector: 'app-search-form-field-container',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    CustomFormFieldControlComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './search-form-field-container.component.html',
  styleUrl: './search-form-field-container.component.scss',
})
export class SearchFormFieldContainerComponent {
  formControl = new FormControl(
    { scope: '', query: '' },
    AdvancedSearchControlValidator
  );

  @Input() appearance: MatFormFieldAppearance = 'outline';
}

function AdvancedSearchControlValidator(
  control: AbstractControl
): ValidationErrors | null {
  return control.value.scope !== null && control.value.query !== ''
    ? null
    : {
        validateSearch: {
          valid: true,
        },
      };
}

export function bannedWords(bannedWords: string[] | null): ValidatorFn {
  return (control: AbstractControl<string | null>): ValidationErrors | null => {
    const { value } = control;
    const foundedWord = bannedWords?.find(
      (word) => word.toLocaleLowerCase() === value?.toLocaleLowerCase()
    );
    return foundedWord ? { bannedWords: { bannedWord: foundedWord } } : null;
  };
}
