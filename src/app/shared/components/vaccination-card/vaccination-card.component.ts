import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vaccination-card',
  templateUrl: './vaccination-card.component.html',
  styleUrls: ['./vaccination-card.component.scss']
})
export class VaccinationCardComponent implements OnInit {

  @Input() vaccineType!: string;
  @Input() vaccineDoseNumber!: number;
  @Input() vaccinatedDate!: string;
  @Input() vaccinatedPlace!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
