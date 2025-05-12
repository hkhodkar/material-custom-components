import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ROW_DATA, ON_ACTION } from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-table-action',
  imports: [MatButtonModule],
  templateUrl: './table-action.component.html',
  styleUrl: './table-action.component.scss'
})
export class TableActionComponent {
  row = inject(ROW_DATA);
  onAction = inject(ON_ACTION);

  delete() {
    this.onAction?.({ type: 'delete', row: this.row });
  }
}
