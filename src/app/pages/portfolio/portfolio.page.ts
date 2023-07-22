import { Component } from "@angular/core";

@Component({
	selector: `portfolio`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-300">{{ "portfolio.title" | transloco }}</h3>
		<p>{{ "portfolio.body.intro" | transloco }}</p>
		<ul>
			<li>
				<a
					mat-button
					href="https://nonnodacciaio.github.io/marcosabau.github.io/"
					class="hover:underline cursor-pointer"
					color="accent"
					>{{ "portfolio.body.oldPortfolio" | transloco }}</a
				>&nbsp;
				<a
					mat-button
					href="https://nonnodacciaio.github.io/marcosabau.github.io/"
					target="_blank"
					class="hover:underline cursor-pointer"
					color="accent"
					><i class="fas fa-up-right-from-square"></i
				></a>
			</li>
			<li>
				<a
					mat-button
					[routerLink]="'meteo'"
					class="hover:underline cursor-pointer"
					color="accent"
					>{{ "portfolio.body.meteoApp" | transloco }}</a
				>&nbsp;<a
					mat-button
					[routerLink]="'meteo'"
					target="_blank"
					class="hover:underline cursor-pointer"
					color="accent"
					><i class="fas fa-up-right-from-square"></i
				></a>
			</li>
			<li>
				<a
					mat-button
					href="https://github.com/nonnodacciaio/personal-website"
					class="hover:underline cursor-pointer"
					color="accent"
					>{{ "portfolio.body.thisWebsite" | transloco }}</a
				>&nbsp;<a
					mat-button
					href="https://github.com/nonnodacciaio/personal-website"
					target="_blank"
					class="hover:underline cursor-pointer"
					color="accent"
					><i class="fas fa-up-right-from-square"></i
				></a>
			</li>
			<li>
				<a
					mat-button
					href="https://play.unity.com/mg/other/webgl-65m"
					class="hover:underline cursor-pointer"
					color="accent"
					>{{ "portfolio.body.flappyBird" | transloco }}</a
				>&nbsp;<a
					mat-button
					href="https://play.unity.com/mg/other/webgl-65m"
					target="_blank"
					class="hover:underline cursor-pointer"
					color="accent"
					><i class="fas fa-up-right-from-square"></i
				></a>
			</li>
		</ul>
	</div>`
})
export class PortfolioPage {}
