import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { MatDialog } from '@angular/material/dialog';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';

export interface PeriodicElement {
  
 name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
 title = 'material-ui';
  dialogRef: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DummyDialogDisplayComponent, {
      width: '600px',
      height: '250px',
      disableClose: true,

      data: { name: 'vishal', phone: 988946874 },
    });
    // after closing the dialog , we are subscribing that form value here
    //getting data from dialog
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
}
