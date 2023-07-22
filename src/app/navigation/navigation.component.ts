import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: `navigation`,
	template: `
		<div class="flex justify-between items-center m-3">
			<div class="flex">
				<a
					routerLinkActive="home"
					[color]="isActive('home') ? 'accent' : 'primary'"
					mat-button
					[routerLink]="'home'"
					aria-label="Home">
					{{ "navigation.home" | transloco }}
				</a>

				<a
					routerLinkActive="skills"
					[color]="isActive('skills') ? 'accent' : 'primary'"
					mat-button
					[routerLink]="'skills'"
					aria-label="Skills">
					{{ "navigation.skills" | transloco }}
				</a>

				<a
					[color]="isActive('portfolio') ? 'accent' : 'primary'"
					mat-button
					[routerLink]="'portfolio'"
					aria-label="Portfolio">
					{{ "navigation.portfolio" | transloco }}
				</a>

				<a
					[color]="isActive('contacts') ? 'accent' : 'primary'"
					mat-button
					[routerLink]="'contacts'"
					aria-label="Contacts">
					{{ "navigation.contacts" | transloco }}
				</a>
			</div>
			<div>
				<language-selector class="mx-3"></language-selector>
				<theme-toggle class="mx-3"></theme-toggle>
			</div>
		</div>
		<mat-divider></mat-divider>
	`
})
export class NavigationComponent {
	constructor(private router: Router) {}

	isActive(route: string): boolean {
		// Check if the current route matches the provided route
		return this.router.isActive(route, true);
	}
}
