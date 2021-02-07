import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor() { }
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter();

  ngOnInit(): void {
  }

  onValueChange(e): void {
    this.valueChange.emit(this.value);
  }
}
