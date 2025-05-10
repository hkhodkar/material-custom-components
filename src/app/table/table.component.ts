import { CommonModule, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { DynamicCellComponent } from './dynamic-cell/dynamic-cell.component';
import { ActionMenuComponent } from '../action-menu/action-menu.component';
import { StatusComponent } from '../status/status.component';
import { ColumnConfig, TableRow } from '../models/tables';

@Component({
  selector: 'app-table',
  imports: [
    NgFor,
    MatTableModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    CommonModule,
    DynamicCellComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  rows = signal<TableRow[]>([]);

  columns: ColumnConfig[] = [];

  displayedColumns = computed(() => this.columns.map((c) => c.value));

  ngOnInit(): void {
    this.columns = [
      {
        value: 'value',
        label: 'نام',
      },
      {
        value: 'status',
        label: 'وضعیت',
        // render: () => StatusComponent,
      },
      {
        value: 'id',
        label: 'عملیات',
        render: () => ActionMenuComponent,
      },
    ];

    this.rows.set([
      { id: 1, value: 'علی', status: 'active' },
      { id: 2, value: 'سارا', status: 'inactive' },
    ]);
  }
}
