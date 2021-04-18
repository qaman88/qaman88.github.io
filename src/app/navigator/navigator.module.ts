import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavigatorComponent} from "./navigator.component";
import {BrowserModule} from "@angular/platform-browser";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {ContentComponent} from "./content/content.component";
import {FootbarComponent} from "./footbar/footbar.component";
import {SociallinksComponent} from "./sociallinks/sociallinks.component";
import {EducationComponent} from "./content/expertcv/education/education.component";
import {InfobarComponent} from "./content/expertcv/infobar/infobar.component";
import {IntroductionComponent} from "./content/expertcv/introduction/introduction.component";
import {ProjectsComponent} from "./content/expertcv/projects/projects.component";
import {SkillsComponent} from "./content/expertcv/skills/skills.component";
import { ExperienceComponent } from "./content/expertcv/experience/experience.component";
import { ExpertCVComponent } from "./content/expertcv/expertcv.component";

@NgModule({
	declarations: [
		NavigatorComponent,
		SociallinksComponent,
		ToolbarComponent,
		ContentComponent,
		FootbarComponent,
		IntroductionComponent,
		EducationComponent,
		SkillsComponent,
		ExperienceComponent,
		ProjectsComponent,
		InfobarComponent,
    ExpertCVComponent
	],
	imports: [CommonModule, BrowserModule],
	bootstrap: [NavigatorComponent],
})
export class NavigatorModule {}
