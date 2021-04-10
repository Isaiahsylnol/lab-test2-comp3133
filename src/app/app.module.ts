import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
