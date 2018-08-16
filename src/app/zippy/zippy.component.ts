import { Component, OnInit, Input } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '../../../node_modules/@angular/core/src/view/provider';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
@Input('title') title:string;
isExpanded: boolean = true;

onClick(){
  this.isExpanded = !this.isExpanded;
}
}
