import {Component, OnInit} from "@angular/core";
import { PersonalItems } from "../mocks/personal";

export interface Personal {
  id: string;
  value: string;
}

@Component({
	selector: "app-introduction",
	templateUrl: "./introduction.component.html",
	styleUrls: ["./introduction.component.css"],
})
export class IntroductionComponent implements OnInit {
	// data
	terminalContent: string = `$ echo "welcome"  \n  >> Welcome to Expert CV`;
	count: number = 0;
	timer: any = undefined;
	personalItems: Personal[] = [];

	// constructor
	constructor() {}

	// onInit
	ngOnInit(): void {
    this.getItems();
		this.timer = setInterval(() => this.onTimerEvent(), 2500);
	}

  // retrieve personal information
	getItems(): void {
		for (const key in PersonalItems) {
			if (key) {
				// extract personal item
				const item: Personal = {
					id: key,
					value: PersonalItems[key],
				};

				// add personal item to data
				this.personalItems.push(item);
			}
		}
  }

  // timer event
  onTimerEvent() {
		if (this.personalItems[this.count]) {
			this.terminalContent += `\n$ echo "${this.personalItems[this.count].id}"	\n >> ${this.personalItems[this.count].value}`;
			this.count++;
		} else {
			this.terminalContent += `\n$ echo "The End"	\n  >> Personal information ended, thanks!`;
			clearInterval(this.timer);
			this.timer = undefined;
			this.count = undefined;
		}
  }

	// terminal content
	getTerminalContent() {
		return this.terminalContent;
	}
}
