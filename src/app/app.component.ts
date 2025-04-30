import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormFieldContainerComponent } from './search-form-field-container/search-form-field-container.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomMaterialInputComponent } from './custom-material-input/custom-material-input.component';
import { MatButtonModule } from '@angular/material/button';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { OptionModel } from './models/option.model';
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    CustomMaterialInputComponent,
    MatButtonModule,
    RadioGroupComponent,
    CheckboxGroupComponent,
    SingleSelectComponent,
    MultiSelectComponent,
    CheckBoxComponent,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-custom-components';
  form!: FormGroup;

  radioOptions = [
    { label: 'Radio 1', value: 'r1' },
    { label: 'Radio 2', value: 'r2' },
  ];

  checkboxOption: OptionModel = {
    label: 'test',
    value: true,
  };

  checkboxOptions: OptionModel[] = [
    { label: 'Checkbox A', value: 'a' },
    { label: 'Checkbox B', value: 'b' },
    { label: 'Checkbox C', value: 'c' },
  ];

  selectOptions: OptionModel[] = [
    { label: 'Select X', value: 'x' },
    { label: 'Select Y', value: 'y' },
  ];

  multiOptions: OptionModel[] = [
    { label: 'Multi 1', value: 1 },
    { label: 'Multi 2', value: 2 },
    { label: 'Multi 3', value: 3 },
  ];

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      radio: new FormControl(null, Validators.required),
      checkbox: new FormControl(false, Validators.requiredTrue),
      checkboxes: new FormControl([], Validators.required),
      singleSelect: new FormControl(null, Validators.required),
      multiSelect: new FormControl([], Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      // Process form data...
      console.log('Form Value:', this.form.value);
    }
  }
}
