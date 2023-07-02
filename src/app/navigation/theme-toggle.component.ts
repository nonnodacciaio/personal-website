import { Component, ElementRef, ViewChild } from "@angular/core";
import { SunMoonSvgs } from "./sunMoonSvgs";
import { ThemeService } from "./services/theme.service";

@Component({
	selector: "theme-toggle",
	template: ` <mat-slide-toggle
		aria-label="theme toggle"
		[checked]="isDarkTheme"
		(change)="toggleTheme()"
		#darkModeSwitch></mat-slide-toggle>`
})
export class ThemeToggleComponent {
	@ViewChild("darkModeSwitch", { read: ElementRef }) element: ElementRef | undefined;
	isDarkTheme = false;

	constructor(private themeService: ThemeService) {}

	ngAfterViewInit() {
		if (this.element) {
			this.element.nativeElement.querySelector(".mdc-switch__icon--on").firstChild.setAttribute("d", SunMoonSvgs.Moon);
			this.element.nativeElement.querySelector(".mdc-switch__icon--off").firstChild.setAttribute("d", SunMoonSvgs.Sun);
		}
		setTimeout(() => {
			this.getTheme();
		}, 1);
	}

	toggleTheme(): void {
		this.isDarkTheme = !this.isDarkTheme;
		const theme = this.isDarkTheme ? "dark" : "light";
		this.themeService.setTheme(theme);
		localStorage.setItem("theme", theme);
	}

	getTheme(): void {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			this.isDarkTheme = savedTheme === "dark";
		}
		this.updateTheme();
	}

	updateTheme(): void {
		const theme = this.isDarkTheme ? "dark" : "light";
		this.themeService.setTheme(theme);
		localStorage.setItem("theme", theme);
	}
}
