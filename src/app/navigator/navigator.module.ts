import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigatorComponent} from "./navigator.component";
import {BrowserModule} from "@angular/platform-browser";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentComponent } from './content/content.component';
import { FootbarComponent } from './footbar/footbar.component';
import { SociallinksComponent } from './sociallinks/sociallinks.component';

@NgModule({
	declarations: [NavigatorComponent, ToolbarComponent, ContentComponent, FootbarComponent, SociallinksComponent],
	imports: [CommonModule, BrowserModule],
	bootstrap: [NavigatorComponent],
})
export class NavigatorModule {
}
