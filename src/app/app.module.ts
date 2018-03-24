import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { SamplePipePipe } from './sample-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SampleDirectiveDirective,
    SamplePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
