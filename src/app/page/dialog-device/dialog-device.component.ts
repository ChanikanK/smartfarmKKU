import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-device',
  templateUrl: './dialog-device.component.html',
  styleUrls: ['./dialog-device.component.scss'],
})
export class DialogDeviceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDeviceComponentDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'app-dialog-device-dialog',
  templateUrl: './dialog-device-dialog.component.html',
  styleUrls: ['./dialog-device.component.scss'],
})
export class DialogDeviceComponentDialog {
  dialogTitle: string = 'Add template';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
