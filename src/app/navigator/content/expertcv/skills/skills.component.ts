import {Component, OnInit} from "@angular/core";
import {SkillItems} from "../mocks/skills";
export interface Skill {
	title: string;
	summary: string;
}

@Component({
	selector: "app-skills",
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
	// data
	data: Skill[] = [];
	current = 0;
	autoplay = false;
	timer: any = undefined;

	// constructor
	constructor() {}

	// onInit
	ngOnInit(): void {
		this.getItems();
		this.timer = setInterval(() => this.onTimerEvent(), 5000);
	}

	// timer event
	onTimerEvent(): void {
		if (this.autoplay) {
			if (this.current + 1 >= this.data.length - 1) {
				this.current = 0;
			} else {
				++this.current;
			}
		}
	}

	// get items
	getItems(): void {
		for (const key in SkillItems) {
			if (key) {
				// extract Skill item
				const item: Skill = {
					title: SkillItems[key].Title,
					summary: SkillItems[key].Summary,
				};

				// add Skill item to data
				this.data.push(item);
			}
		}
	}

	onBack(): void {
		if (this.current > 0) {
			--this.current;
		}
	}

	onTogglePlay(): void {
		this.autoplay = !this.autoplay;
	}

	onNext(): void {
		if (this.current < this.data.length - 1) {
			++this.current;
		}
	}
}
