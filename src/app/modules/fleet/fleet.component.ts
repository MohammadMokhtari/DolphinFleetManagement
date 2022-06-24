import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  symptom: string;
  title: string;
  type: string;
  number: number;
  label: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    symptom: 'assets/uniticon/ic_unit1.png',
    title: 'پاتیل بر9',
    type: 'دستگاه ایگل E200',
    number: +94874784,
    label: '',
  },
  {
    symptom: 'assets/uniticon/ic_unit3.png',
    title: 'پاتیل بر15',
    type: 'دستگاه ایگل E450',
    number: +94874784,
    label: '',
  },
  {
    symptom: 'assets/uniticon/ic_unit4.png',
    title: 'پاتیل بر7',
    type: 'دستگاه ایگل E21230',
    number: +94874784,
    label: '',
  },
  {
    symptom: 'assets/uniticon/ic_unit6.png',
    title: 'پاتیل بر5',
    type: 'دستگاه ایگل E254',
    number: +94874784,
    label: 'خودرو کوره',
  },
  {
    symptom: 'assets/uniticon/ic_unit5.png',
    title: 'پاتیل بر10',
    type: 'دستگاه ایگل E214',
    number: +94874784,
    label: '',
  },
  {
    symptom: 'assets/uniticon/ic_unit7.png',
    title: 'پاتیل بر4',
    type: 'دستگاه ایگل E123',
    number: +94874784,
    label: '',
  },
];

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['symptom', 'title', 'type', 'number', 'label'];
  public dataSource = ELEMENT_DATA;
}
