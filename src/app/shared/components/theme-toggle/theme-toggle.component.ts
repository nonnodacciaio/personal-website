import { Component } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

@Component({
	selector: "theme-toggle",
	template: ` <mat-slide-toggle
		class="fixed top-3 right-3"
		(change)="toggleTheme()"
		[name]="'Dark mode'">
	</mat-slide-toggle>`
})
export class ThemeToggleComponent {
	isDarkTheme = false;

	constructor(private themeService: ThemeService) {}

	toggleTheme(): void {
		this.isDarkTheme = !this.isDarkTheme;
		const theme = this.isDarkTheme ? "dark" : "light";
		this.themeService.setTheme(theme);
	}
}
