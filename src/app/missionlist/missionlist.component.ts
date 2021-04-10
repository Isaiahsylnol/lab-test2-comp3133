import { Component, OnInit, Input } from '@angular/core';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  @Input() parentData: any = []

  missionData : any = [];
  constructor(private mission:MissionsService) {

    this.mission.getData().subscribe(data =>{
      console.log(data)
      this.missionData=(data)
      this.parentData=(this.missionData)
    })

  }

  ngOnInit(): void {

  }

}
