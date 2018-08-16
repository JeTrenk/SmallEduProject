import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testTable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  books = [
    {id: 1, name: "book1"},
    {id: 2, name: "book2"},
    {id: 3, name: "book3"}
  ];

}
