import { Component, OnInit } from '@angular/core';

export interface format {
  add: string;
  remove: string;
  all: string;
  none: string;
  direction: string;
  draggable: boolean;
  locale: any;
}

@Component({
  selector: 'app-dual-listbox',
  templateUrl: './dual-listbox.component.html',
  styleUrls: ['./dual-listbox.component.scss'],
})
export class DualListboxComponent implements OnInit {
  tab = 1;
	keepSorted = true;
	key!: string;
	display: any;
	filter = false;
	source!: Array<any>;
	confirmed!: Array<any>;
	userAdd = '';
	disabled = false;
	sourceLeft = true;
  format!: format;

  constructor() {}

  ngOnInit(): void {
    this.source = [
      {
        _id: 1,
        name: 'Pawn',
      },
      {
        _id: 2,
        _name: 'Rook',
      },
      {
        _id: 3,
        name: 'Knight',
      },
      {
        _id: 4,
        name: 'Bishop',
      },
      {
        _id: 5,
        name: 'Queen',
      },
      {
        _id: 6,
        name: 'King',
      },
    ];

    this.confirmed = []
    this.format = {
      add: 'Add',
      remove: 'Remove',
      all: 'All',
      none: 'None',
      direction: 'left-to-right',
      draggable: true,
      locale: undefined,
    };

    this.key = '_id';
		this.display = 'name';
  }
}
