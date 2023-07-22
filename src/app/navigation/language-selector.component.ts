import { Component, OnInit } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";

@Component({
	selector: "language-selector",
	template: ` <select
		class="bg-slate-500"
		[(ngModel)]="selectedLanguage"
		(change)="setLanguage(selectedLanguage)">
		<option value="en">{{ "navigation.languagePicker.english" | transloco }}</option>
		<option value="it">{{ "navigation.languagePicker.italian" | transloco }}</option>
	</select>`
})
export class LanguageSelectorComponent implements OnInit {
	selectedLanguage: string = "en";

	constructor(private translocoService: TranslocoService) {}

	ngOnInit(): void {
		const storedLanguage = localStorage.getItem("language");

		this.selectedLanguage = storedLanguage || "en";

		this.translocoService.setActiveLang(this.selectedLanguage);
	}

	setLanguage(lang: string): void {
		this.translocoService.setActiveLang(lang);

		localStorage.setItem("language", lang);
	}
}
