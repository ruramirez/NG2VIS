import { NgModule } from '@angular/core';

import { VisNetworkDirective, VisNetworkService } from './networkComponents/network/index';
import { VisTimelineDirective, VisTimelineService } from './networkComponents/timeline/index';

export * from './networkComponents/index';

@NgModule({
  declarations: [VisNetworkDirective, VisTimelineDirective],
  exports: [VisNetworkDirective, VisTimelineDirective],
  providers: [VisNetworkService, VisTimelineService],
})
export class VisModule { }