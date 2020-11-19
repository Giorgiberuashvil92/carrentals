import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcceptDialogComponent } from 'src/app/modules/all-my-trips/accept-dialog/accept-dialog.component';
import { ArriveDayComponent } from 'src/app/modules/all-my-trips/arrive-day/arrive-day.component';
import { ChangeActivityComponent } from 'src/app/modules/all-my-trips/change-activity/change-activity.component';
import { ChangeTransportComponent } from 'src/app/modules/all-my-trips/change-transport/change-transport.component';
import { ChooseNewActivityComponent } from 'src/app/modules/all-my-trips/choose-new-activity/choose-new-activity.component';
import { EditTripComponent } from 'src/app/modules/all-my-trips/edit-trip/edit-trip.component';
import { NotIncludeComponent } from 'src/app/modules/all-my-trips/not-include/not-include.component';
import { SelectActivityComponent } from 'src/app/modules/all-my-trips/select-activity/select-activity.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogMap = {
    'changeActivity': {
      component: ChangeActivityComponent,
      maxWidth: '600px'
    },
    'changeTransport': {
      component: ChangeTransportComponent,
      maxWidth: '470px'
    },
    'selectActivity': {
      component: SelectActivityComponent,
      maxWidth: '932px'
    },
    'editTrip': {
      component: EditTripComponent,
      maxWidth: '762px'
    },
    'arriveDay': {
      component: ArriveDayComponent,
      maxWidth: '550px'
    },
    'acceptDialog': {
      component: AcceptDialogComponent,
      maxWidth: '450px'
    },
    'notInclude': {
      component: NotIncludeComponent,
      maxWidth: '520px'
    },
    'chooseNewActivity': {
      component: ChooseNewActivityComponent,
      maxWidth: '762px'
    },
  }

  private dialogRef;

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog(dialogName: string, data?: any) {
    if(this.dialogMap.hasOwnProperty(dialogName)) {
      this.dialogRef = this.dialog.open(this.dialogMap[dialogName].component, {
        width: '90%',
        maxWidth: this.dialogMap[dialogName].maxWidth,
        data
      });
    }
  }

  closeDialog() {
    if(this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
