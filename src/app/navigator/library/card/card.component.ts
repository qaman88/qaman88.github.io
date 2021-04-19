import {Component, Input, OnInit} from "@angular/core";

export interface Card {
	id?: any;
	title: string;
	article: string;
	items?: string[];
	tags?: string[];
	image?: {src: string; width?: number; height?: number};
}

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() collapse: boolean = false;
	@Input() data: Card;

	constructor() {}

	ngOnInit(): void {}

  onToggleCollapse() {
    this.collapse = !this.collapse;
  }
}
