import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ROW_DATA } from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-table-status',
  imports: [MatIconModule],
  templateUrl: './table-status.component.html',
  styleUrl: './table-status.component.scss'
})
export class TableStatusComponent {
  data = inject(ROW_DATA);
}
