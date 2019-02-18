import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBjwuc-wN4Zz-4_TlGb6nhr4-X-WNpK85Q'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
})
export class MapModule { }
