import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '@mdv16/core-data';

@Component({
  selector: 'mdv16-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: Phone[];
  @Input() selected: Phone;
  @Output() selectPhone = new EventEmitter<number>();
  @Output() deletePhone = new EventEmitter<Phone>();

  constructor() { }

  ngOnInit() {
  }
}
