import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() parentData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
