import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigatorComponent} from "./navigator.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [NavigatorComponent],
	imports: [CommonModule, BrowserModule],
	bootstrap: [NavigatorComponent],
})
export class NavigatorModule {
}
