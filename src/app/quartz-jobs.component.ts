import {Component} from '@angular/core'
import { QuartzService } from './quartz.service';

@Component ({
    selector: 'quartz',
    template: `<h3>{{title}}</h3>
    <ul>
        <li *ngFor="let job of jobs">{{job}}</li>    
    </ul>`
})

export class QuartzJob {
    title = "Summary";
    jobs;
    
    /**
     *
     */
    constructor(service: QuartzService) {
        this.jobs = service.getJobs();

    }
}