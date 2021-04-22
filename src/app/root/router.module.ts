import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExpertCVComponent} from "../content/expertcv/expertcv.component";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "../content/projects/projects.component";

export const routes: Routes = [
	{path: "", redirectTo: "/expertcv", pathMatch: "full"},
	{path: "expertcv", component: ExpertCVComponent},
	{path: "projects", component: ProjectsComponent},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

export interface Page {
	name: string;
	path: string;
}

export const PAGES: Page[] = [
	{name: "ExpertCV", path: "/expertcv"},
	{name: "Projects", path: "/projects"},
];
