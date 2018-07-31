import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuartzJob } from './quartz-jobs.component';
import { QuartzJobCliComponent } from './quartz-job-cli/quartz-job-cli.component';
import { QuartzService } from './quartz.service';


@NgModule({
  declarations: [
    AppComponent,
    QuartzJob,
    QuartzJobCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuartzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
