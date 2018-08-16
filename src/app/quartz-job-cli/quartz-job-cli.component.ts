import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quartz-job-cli',
  templateUrl: './quartz-job-cli.component.html', 
  styleUrls: ['./quartz-job-cli.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
})

export class QuartzJobCliComponent {
  @Input('is-fav') isSelected = true;
  @Output('change') changee = new EventEmitter();
  constructor() { }

  title = "Jelena";

  onClick()
  {  
    this.isSelected = !this.isSelected;
    this.changee.emit({ newValue: this.isSelected });
  } 

}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}

