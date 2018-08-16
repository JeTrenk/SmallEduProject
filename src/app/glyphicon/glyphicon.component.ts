import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glyphicon',
  templateUrl: './glyphicon.component.html',
  styleUrls: ['./glyphicon.component.css']
})
export class GlyphiconComponent implements OnInit {
  isFavorauble = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorauble = !this.isFavorauble;
  }
}
