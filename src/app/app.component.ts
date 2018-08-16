import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './quartz-job-cli/quartz-job-cli.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post=
  {
    title: 'app',
    isFavourite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs)
  {
    console.log("sth was happend!" + eventArgs);  
  }

  tweet={
    body: "Here is the body of the tweet...",
    isLiked: false,
    likesCount:0
  }

  like(){
    console.log('like is pressed...');
  }

  viewMode = 'testTable';
}
