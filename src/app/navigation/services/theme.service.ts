import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class ThemeService {
	private readonly DARK_THEME_CLASS = "dark-theme";
	private readonly LIGHT_THEME_CLASS = "light-theme";

	setTheme(theme: "dark" | "light"): void {
		const body = document.getElementsByTagName("body")[0];
		if (theme === "dark") {
			body.classList.add(this.DARK_THEME_CLASS);
			body.classList.remove(this.LIGHT_THEME_CLASS);
		} else {
			body.classList.add(this.LIGHT_THEME_CLASS);
			body.classList.remove(this.DARK_THEME_CLASS);
		}
	}
}
