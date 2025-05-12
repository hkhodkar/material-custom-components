import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, InjectionToken, Injector, input, Input, Signal, Type } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface TableColumn {
  key: string;
  header: string;
  component?: Type<unknown>;

}
export const ROW_DATA = new InjectionToken<any>('ROW_DATA');
export const ON_ACTION = new InjectionToken<(event: any) => void>('ON_ACTION');


@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule, MatTableModule, NgComponentOutlet],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent<T> {
  @Input({ required: true }) rows!: Signal<T[]>;
  @Input({ required: true }) columns!: Signal<TableColumn[]>;

  private baseInjector = inject(Injector);

  displayedColumns = computed(() => this.columns().map(c => c.key));

  createInjector(row: T): Injector {
    return Injector.create({
      providers: [
        { provide: ROW_DATA, useValue: row },
        { provide: ON_ACTION, useValue: (event: any) => this.handleCellAction(row, event) }
      ],
      parent: this.baseInjector,
    });
  }

  handleCellAction(row: T, event: any) {
    console.log('Action:', event, 'Row:', row);
  }
}
