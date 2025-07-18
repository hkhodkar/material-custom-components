import { Component, computed, effect, signal } from '@angular/core';
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
import { MenuAnelComponent } from "./menu-anel/menu-anel.component";
import { CommonModule } from '@angular/common';
import { ExpandMenuComponent } from "./expand-menu/expand-menu.component";
import { TableComponent } from "./table/table.component";
import { DynamicTableComponent, TableColumn } from './dynamic-table/dynamic-table.component';
import { TableStatusComponent } from './table-status/table-status.component';
import { TableActionComponent } from './table-action/table-action.component';
import { ExpandedProgressBarComponent } from "./expanded-progress-bar/expanded-progress-bar.component";
import { HighChartsComponent } from './high-charts/high-charts.component';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

type TimeRange = 'Last Week' | 'Last Month' | 'Last Year';



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
    ButtonComponent,
    MenuAnelComponent,
    CommonModule,
    ExpandMenuComponent,
    TableComponent,
    DynamicTableComponent,
    ExpandedProgressBarComponent,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    HighChartsComponent,
    MatTabsModule
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

  rows = signal([
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'inactive' },
  ]);

  columns = signal<TableColumn[]>([
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status', component: TableStatusComponent },
    { key: 'actions', header: 'Actions', component: TableActionComponent },
  ]);

  // --- UI State
  timeRanges: TimeRange[] = ['Last Week', 'Last Month', 'Last Year'];
  selectedRange = signal<TimeRange>('Last Month');
  selectedTabIndex = 0;

  setRange(val: TimeRange) {
    this.selectedRange.set(val);
  }

  // --- Chart Data
  private baseData: Record<TimeRange, number[]> = {
    'Last Week': [13, 24, 15, 29, 30, 21, 19],
    'Last Month': [
      120, 160, 140, 130, 170, 190, 200, 170,
      150, 180, 210, 220, 200, 190, 160, 150,
      140, 170, 160, 180, 200, 210, 220, 230,
      240, 250, 230, 220, 210, 200
    ],
    'Last Year': [
      1200, 1100, 1300, 1400, 1350, 1500,
      1600, 1550, 1700, 1750, 1650, 1800
    ],
  };

  chartData = signal<number[]>([...this.baseData[this.selectedRange()]]);

  // React to range change
  constructor() {
    effect(() => {
      this.chartData.set([...this.baseData[this.selectedRange()]]);
    });
  }

  randomizeData() {
    const len = this.chartData().length;
    this.chartData.set(Array.from({ length: len }, () => Math.floor(Math.random() * 200 + 1)));
  }

  // --- Computed Chart Options with correct types
  lineChartOptions = computed<Highcharts.Options>(() => ({
    chart: { type: 'line' },
    title: { text: 'Sales Trend' },
    xAxis: { categories: this.getCategories() },
    yAxis: { title: { text: 'Sales' } },
    series: [{
      type: 'line',    // Explicit type for type safety
      name: 'Sales',
      data: this.chartData(),
    }],
    credits: { enabled: false },
  }));

  columnChartOptions = computed<Highcharts.Options>(() => ({
    chart: { type: 'column' },
    title: { text: 'Sales Trend' },
    xAxis: { categories: this.getCategories() },
    yAxis: { title: { text: 'Sales' } },
    series: [{
      type: 'column',   // Explicit type for type safety
      name: 'Sales',
      data: this.chartData(),
    }],
    credits: { enabled: false },
  }));

  pieChartOptions = computed<Highcharts.Options>(() => ({
    chart: { type: 'pie' },
    title: { text: 'Sales Share' },
    series: [{
      type: 'pie',
      name: 'Sales',
      data: this.chartData().map((val, idx) => ({
        name: this.getCategories()[idx] || `Day ${idx + 1}`,
        y: val
      })),
    }],
    credits: { enabled: false },
  }));

  getCategories(): string[] {
    if (this.selectedRange() === 'Last Week') {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    } else if (this.selectedRange() === 'Last Month') {
      return Array.from({ length: this.chartData().length }, (_, i) => `Day ${i + 1}`);
    } else {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
   }
}
