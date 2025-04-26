import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormFieldContainerComponent } from "./search-form-field-container/search-form-field-container.component";

@Component({
  selector: 'app-root',
  imports: [SearchFormFieldContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-custom-components';
}
