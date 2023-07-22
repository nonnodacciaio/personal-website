import { Component } from "@angular/core";

@Component({
	selector: `home`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<div>
			<h3 class="text-amber-300">{{ "home.title" | transloco }}</h3>
		</div>
		<p>
			{{ "home.body.p1" | transloco }}
		</p>
		<p>
			{{ "home.body.p2" | transloco }}
		</p>
		<p>
			{{ "home.body.p3" | transloco }}
		</p>
		<p>
			{{ "home.body.p4" | transloco }}
		</p>
		<p>
			{{ "home.body.p5" | transloco }}
		</p>
		<p>
			{{ "home.body.p6" | transloco }}
		</p>
	</div>`
})
export class HomePage {}
