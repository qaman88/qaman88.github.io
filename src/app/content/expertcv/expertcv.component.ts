import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-expertcv",
	templateUrl: "./expertcv.component.html",
	styleUrls: ["./expertcv.component.css"],
})
export class ExpertCVComponent implements OnInit {
  // data
  pageUrl: string;

  // constructor
	constructor(private router: Router) {
  }

  // onInit
	ngOnInit(): void {
    this.pageUrl = this.router.url;
  }
}
