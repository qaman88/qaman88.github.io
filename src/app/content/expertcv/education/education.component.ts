import {Component, OnInit} from "@angular/core";
import { Card } from "src/app/library/card/card.component";
import {EducationItems} from "../mocks/education";
@Component({
	selector: "app-education",
	templateUrl: "./education.component.html",
	styleUrls: ["./education.component.css"],
})
export class EducationComponent implements OnInit {
	// data
	data: Card[] = [];

	// constructor
	constructor() {}

	// onInit
	ngOnInit(): void {
		this.getItems();
	}

	getItems(): void{
		for (const key in EducationItems) {
			if (key) {
				// extract Education item
				const item: Card = {
					title: EducationItems[key].Title,
					article: EducationItems[key].Description,
					image: {src: EducationItems[key].ImageSource, width: 100, height: 100},
					items: [EducationItems[key].Institution, EducationItems[key].Certificate, EducationItems[key].Year],
				};

				// add Education item to data
				this.data.push(item);
			}
		}
	}
}
