import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-pop-window',
  templateUrl: './pop-window.component.html',
  styleUrls: ['./pop-window.component.scss']
})
export class PopWindowComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  close(){
    this.dialog.closeAll();
  }
}
