import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: `navigation`,
	template: `
		<div class="flex m-3">
			<a
				[color]="isActive('home') ? 'accent' : 'primary'"
				mat-button
				[routerLink]="'home'">
				Home
			</a>
			<a
				[color]="isActive('portfolio') ? 'accent' : 'primary'"
				mat-button
				[routerLink]="'portfolio'">
				Portfolio
			</a>
			<a
				[color]="isActive('contacts') ? 'accent' : 'primary'"
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
