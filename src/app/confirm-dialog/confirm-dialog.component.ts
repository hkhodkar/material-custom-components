import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },               // data passed in: e.g. { name: 'Alice' }
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  close(confirm: boolean) {
    this.dialogRef.close(confirm);
  }
}
