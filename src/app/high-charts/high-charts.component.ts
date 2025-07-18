import { Component, effect, ElementRef, input, OnDestroy, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-charts',
  imports: [],
  templateUrl: './high-charts.component.html',
  styleUrl: './high-charts.component.scss'
})
export class HighChartsComponent implements OnDestroy {
  // Define an input signal for chart options. Parent should bind [chartOptions].
  // We initialize it to an empty object to avoid undefined.
  chartOptions = input<Highcharts.Options>({});

  @ViewChild('chartContainer', { static: true }) container!: ElementRef;
  private chart?: Highcharts.Chart;

  constructor() {
    // Reactive effect: runs whenever `chartOptions()` changes.
    effect(() => {
      debugger;
      const opts = this.chartOptions(); // read the current Highcharts.Options
      if (!this.chart) {
        // First time: create the chart in the div element
        this.chart = Highcharts.chart(this.container.nativeElement, opts);
      } else {
        // Subsequent changes: update existing chart with new options
        this.chart.update(opts, true);
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up the chart instance to prevent memory leaks
    this.chart?.destroy();
  }
}
