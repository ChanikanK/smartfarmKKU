import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service.component.html',
  styleUrls: ['./dialog-service.component.scss']
})
export class DialogServiceComponent{

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogServiceComponentDialog, {
      data: {
        animal: 'panda',
      },
    });
  }

}

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service-dialog.component.html',
  styleUrls: ['./dialog-service.component.scss']
})

export class DialogServiceComponentDialog {
  dialogTitle: string = 'Create Service';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
