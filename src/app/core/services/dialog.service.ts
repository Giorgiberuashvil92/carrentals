import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {



  public dialogRef: MatDialogRef<any>;

  currentDialogName: string;

  constructor(
    private dialog: MatDialog
  ) { }


  closeDialog() {
    if(this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
      this.currentDialogName = null;
    }
  }

  updateSize(width?: string, height?: string) {
    if(this.dialogRef) {
      this.dialogRef.updateSize(width, height);
    }
  }
}
