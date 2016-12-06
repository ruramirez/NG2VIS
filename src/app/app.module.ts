import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VisNetworkExampleComponent } from './network.component';
import { VisModule } from './ng2-vis';


@NgModule({
  declarations: [
    VisNetworkExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VisModule
  ],
  providers: [],
  bootstrap: [VisNetworkExampleComponent]
})
export class AppModule { }
