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

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CustomMaterialInputComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-custom-components';
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
    });
  }

  onSubmit() {
    console.log('asdasdasd');

    if (this.form.valid) {
      // Process form data...
      console.log('Form Value:', this.form.value);
    }
  }
}
