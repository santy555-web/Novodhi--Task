import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/Cdk/Drag-Drop';
@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  arrdrop =[
     'santosh',
     'sandesh',
     'patibha',
     'sanjiv',
     'rajiv'
  ];


    drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
      moveItemInArray(this.arrdrop, event.previousIndex, event.currentIndex);
    }

    constructor() { }

  ngOnInit(): void {
  }

  }
