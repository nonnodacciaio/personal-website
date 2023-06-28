import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: `navigation`,
	template: `
		<div class="flex m-3">
			<a
				[class.text-accent]="isActive('home')"
				color="primary"
				mat-button
				[routerLink]="'home'">
				Home
			</a>
			<a
				[class.text-accent]="isActive('portfolio')"
				color="primary"
				mat-button
				[routerLink]="'portfolio'">
				Portfolio
			</a>
			<a
				[class.text-accent]="isActive('contacts')"
				color="primary"
				mat-button
				[routerLink]="'contacts'">
				Contacts
			</a>
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
