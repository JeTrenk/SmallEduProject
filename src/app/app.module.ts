import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { QuartzJob } from './quartz-jobs.component';
import { QuartzJobCliComponent } from './quartz-job-cli/quartz-job-cli.component';
import { QuartzService } from './quartz.service';
import { CourseComponent } from './course/course.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { SummaryPipe } from './summary.pipe';
import { GlyphiconComponent } from './glyphicon/glyphicon.component';
import { LikeComponent } from './like/like.component';
import { TableComponent } from './table/table.component';
import { InputformaterDirective } from './inputformater.directive';
import { ZippyComponent } from './zippy/zippy.component'

@NgModule({
  declarations: [
    AppComponent,
    QuartzJob,
    QuartzJobCliComponent,
    CourseComponent,
    CourseComponentComponent,
    SummaryPipe,
    GlyphiconComponent,
    LikeComponent,
    TableComponent,
    InputformaterDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuartzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
