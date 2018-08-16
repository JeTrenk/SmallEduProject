import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
@Input('likesCount') likesCount: number;
@Input('isActive') isActive: boolean;
  
onClick()
  {
    console.log("isActive: " + this.isActive);
    console.log("likesCount: " + this.likesCount);
    this.isActive = !this.isActive;
    this.likesCount = this.isActive ? 1 : 0;
  }
}
