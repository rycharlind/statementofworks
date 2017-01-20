import { Component } from '@angular/core';
import { MdDialogRef} from '@angular/material';

@Component({
  selector: 'your-dialog-selector',
  template: `
  <h2>Are you sure you want to delete this SOW?</h2>
  <qu-button class="qu-raised qu-secondary" (click)="dialogRef.close('yes')">Yes</qu-button>
  <qu-button class="qu-raised qu-tertiary" (click)="dialogRef.close('no')">No</qu-button>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MdDialogRef<any>) { }
}