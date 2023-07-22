import { Component } from "@angular/core";

@Component({
	selector: "skills",
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-300">{{ "skills.title" | transloco }}</h3>
		<p>{{ "skills.body" | transloco }}</p>
	</div>`
})
export class SkillsPage {}
