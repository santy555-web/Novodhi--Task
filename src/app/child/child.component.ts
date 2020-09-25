import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class childComponent implements OnInit {

   @Input() categoryName: string = '';
   @Output() myEvent = new EventEmitter();
  constructor() {}

    ngOnInit(): void {}


    //it is for search method in between parent and child
     onSearchClick(val: string) {
     console.log(val, 'it is from child component');
     this.myEvent.emit(val);
   }
}

