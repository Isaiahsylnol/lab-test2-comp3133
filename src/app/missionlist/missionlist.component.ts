import { Component, OnInit, Input } from '@angular/core';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  @Input() public message: any;
  @Input() parentData: any;

  public missionData : any = [];
  constructor(private mission:MissionsService) {

    this.mission.getData().subscribe(data =>{
      console.log(data)
      this.missionData=(data)
      
    })
  }

  ngOnInit(): void {

  }

}
