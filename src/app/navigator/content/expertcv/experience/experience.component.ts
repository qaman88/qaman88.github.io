import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/navigator/library/card/card.component";
import { ExperienceItems } from "../mocks/experience";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
	// data
	data = [];
	current = 0;
	autoplay = true;
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

  	// get personal items
	getItems(): void {
		for (const key in ExperienceItems) {
			if (key) {
				// extract Experience item
				const item: Card = {
					title: ExperienceItems[key].Title,
					items: [ExperienceItems[key].Type, ExperienceItems[key].Duration],
					article: ExperienceItems[key].Summary,
					tags: ExperienceItems[key].Tags,
					image: { src: ExperienceItems[key].ImageSource},

				};

				// add Experience item to data
				this.data.push(item);
			}
		}

	}

	onBack(): void{
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
