import { NgModule } from '@angular/core';
import {MatButtonModule, MatDividerModule, MatExpansionModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import { HeaderComponent } from './presentationals/header/header.component';
import { DroneComponent } from './containers/drone.component';
import { FormComponent } from './presentationals/form/form.component';
import { DroneListComponent } from './presentationals/drone-list/drone-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DroneListItemComponent} from './presentationals/drone-list-item/drone-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    DroneComponent,
    DroneListComponent,
    DroneListItemComponent,
  ],
  providers: [
    ApiService
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
    DroneComponent
  ],
  bootstrap: [DroneComponent]
})

export class DroneModule { }
