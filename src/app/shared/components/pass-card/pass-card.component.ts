import {Component, Input, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {

  @Input() generateDateTime!:string;
  @Input() startDate!:string;
  @Input() endDate!:string;
  @Input() isValid!:boolean;
  @Input() isApproved!:boolean;
  @Input() passCategory!:string;
  @Input() from!:string;
  @Input() to!:string;

  @Output() someEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  callParent(): void {
    this.someEvent.next('somePhone');
  }

  delete():void{
    this.deleteEvent.next('some')
  }

}
