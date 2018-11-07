import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  nums: string;
  sortedNums: number[];

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const castToNums = _.map(this.nums.split(''), (o) => +o);
    this.sortedNums = this.bubble(castToNums);
  }

  bubble(numbers: number[]): number[] {
    let i = 0;
    let j = 0;
    for (; i < numbers.length; i++) {
      for (j  = numbers.length - 1; j > i; j--) {
        if (numbers[j] < numbers[j - 1]) {
          this.swap(numbers, j - 1, j);
        }
      }
    }
    return numbers;
  }

  swap(arr: number[], a: number, b: number): number[] {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
    return arr;
  }
}
