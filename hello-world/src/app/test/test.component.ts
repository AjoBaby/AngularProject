import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  /* template: '<div> Inline Template</div>',
   style :[`
   div{
     color:red;
   }
   `]
  */ 

  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
