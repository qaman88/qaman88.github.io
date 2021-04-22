import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./root.component";
import {EducationComponent} from "../content/expertcv/education/education.component";
import {ExperienceComponent} from "../content/expertcv/experience/experience.component";
import {ExpertCVComponent} from "../content/expertcv/expertcv.component";
import {InfobarComponent} from "../content/expertcv/infobar/infobar.component";
import {IntroductionComponent} from "../content/expertcv/introduction/introduction.component";
import {SkillsComponent} from "../content/expertcv/skills/skills.component";
import {FootbarComponent} from "../content/footbar/footbar.component";
import {ToolbarComponent} from "../content/toolbar/toolbar.component";
import {CardComponent} from "../library/card/card.component";
import {TerminalComponent} from "../library/terminal/terminal.component";
import {SociallinksComponent} from "../library/sociallinks/sociallinks.component";
import {AppRoutingModule} from "./router.module";

@NgModule({
	declarations: [
		RootComponent,
		SociallinksComponent,
		ToolbarComponent,
		FootbarComponent,
		IntroductionComponent,
		EducationComponent,
		SkillsComponent,
		ExperienceComponent,
		InfobarComponent,
		ExpertCVComponent,
		CardComponent,
		TerminalComponent,
	],
	imports: [CommonModule, BrowserModule, AppRoutingModule],
	bootstrap: [RootComponent],
})
export class RootModule {}
