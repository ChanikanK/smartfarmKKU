import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-sensor',
  templateUrl: './dialog-sensor.component.html',
  styleUrls: ['./dialog-sensor.component.scss'],
})
export class DialogSensorComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogSensorComponentDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'app-dialog-sensor',
  templateUrl: './dialog-sensor-dialog.component.html',
  styleUrls: ['./dialog-sensor.component.scss'],
})

export class DialogSensorComponentDialog {
  dialogTitle: string = 'Add Sensor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
