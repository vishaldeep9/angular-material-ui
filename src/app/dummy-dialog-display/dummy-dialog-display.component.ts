import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy-dialog-display',
  templateUrl: './dummy-dialog-display.component.html',
  styleUrls: ['./dummy-dialog-display.component.css']
})
export class DummyDialogDisplayComponent {
  constructor(
    public dialogRef: MatDialogRef<DummyDialogDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(){
    //here we are closing the dialog and passing the value 123, now we will try to access this value inside main app.component
  this.dialogRef.close(123)
  }
 
}
