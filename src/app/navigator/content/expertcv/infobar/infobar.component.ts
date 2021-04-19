import {Component, OnInit} from "@angular/core";

@Component({
	selector: "app-infobar",
	templateUrl: "./infobar.component.html",
	styleUrls: ["./infobar.component.css"],
})
export class InfobarComponent implements OnInit {
	data: string[] = [
		"Professional software engineer, recently worked for Amazon Web Services for for three months as \
	Software Development Intern, then qualified to Software Development Engineer for 12 months.",
		"Graduated at University of Cape Town, South Africa with Bachelor of Science in Engineering in \
	Electrical and Computer Engineering. I seek remote opportunity for Software Engineer.",
		"Experienced with AWS (S3, EC2, Lambda, Cloudwatch, Cloud Formation, DynamoDB, IAM Policy and \
	Role).",
		"Web app using JavaScript, Typescript, HTML, CSS, SCSS, Bootstrap and Polaris.",
		"Express RESTful API and fundamentals of GraphQL API.",
		"API development with software languages such as C++, \
	Python, Kotlin, Java, NodeJs; Excellent problem solving skills mainly through researching, team \
	player, investigation, design, validation.",
	];

	constructor() {}

	ngOnInit(): void {}
}
