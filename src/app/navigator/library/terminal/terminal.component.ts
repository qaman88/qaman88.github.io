import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent implements OnInit {
  // inputs
	@Input() content: string;

  // constructor
  constructor() { }

  // onInit
  ngOnInit(): void {
  }

  // terminal content
  getTerminalContent() {
		return this.content;
	}
}
