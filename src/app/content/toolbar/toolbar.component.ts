import { Component, Input, OnInit } from "@angular/core";
import { Page, PAGES } from "src/app/root/router.module";


@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  @Input() pages: Page[] = PAGES;

  constructor() { }

  ngOnInit(): void {
  }
}
