import {Component, OnInit} from "@angular/core";
import {PersonalItems} from "../mocks/personal";

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
	terminalContent = `$ echo "welcome"  \n  >> Welcome to Expert CV`;
	count = 0;
	timer: any = undefined;
	personalItems: Personal[] = [];

	// constructor
	constructor() {}

	// onInit
	ngOnInit(): void {
		this.getItems();
		this.startTimer();
	}

	startTimer(): void {
		this.timer = setInterval(() => this.onTimerEvent(), 3000);
	}

	stopTimer(): void {
		clearInterval(this.timer);
		this.timer = undefined;
		this.count = undefined;
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
	onTimerEvent(): void {
		if (this.personalItems[this.count]) {
			this.terminalContent += `\n$ echo "${this.personalItems[this.count].id}"	\n >> ${
				this.personalItems[this.count].value
			}`;
			this.count++;
		} else {
			this.terminalContent += `\n$ echo "The End"	\n  >> Personal information ended, thanks!`;
			this.stopTimer();
		}
	}

	// terminal content
	getTerminalContent(): string {
		return this.terminalContent;
	}
}
