import { Component } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
  selector: 'your-dialog-selector',
  template: `
  <h2>Are you sure you want to delete the file?</h2>
  <button md-raised-button (click)="dialogRef.close('yes')">Yes</button>
  <button md-raised-button (click)="dialogRef.close('no')">No</button>`
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MdDialogRef<any>) { }
}