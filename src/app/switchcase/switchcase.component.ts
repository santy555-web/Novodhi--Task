import { Component, OnInit } from '@angular/core';
import { items } from './items';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {


    name: string;
    val: number;

    items: items[] = [
      new items('January', 1),
      new items('February', 2),
      new items('March', 3),
      new items('April', 4),
      new items('May', 5),
      new items('June', 6),
      new items('July', 7),
      new items('August', 8),
      new items('September', 9),
      new items('Octomber', 10),
      new items('November', 11),
      new items('December', 12),
    ]
    selectedValue: string= 'One';

  constructor() { }

  ngOnInit(): void {
  }




}
