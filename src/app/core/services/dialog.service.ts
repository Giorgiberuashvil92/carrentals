import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeActivityComponent } from 'src/app/modules/all-my-trips/change-activity/change-activity.component';
import { SelectActivityComponent } from 'src/app/modules/all-my-trips/select-activity/select-activity.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogMap = {
    'changeActivity': ChangeActivityComponent,
    'selectActivity': SelectActivityComponent
  }

  private dialogRef;

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(dialogName: string) {
    if(this.dialogMap.hasOwnProperty(dialogName)) {
      this.dialogRef = this.dialog.open(this.dialogMap[dialogName]);
    }
  }

  closeDialog() {
    if(this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
