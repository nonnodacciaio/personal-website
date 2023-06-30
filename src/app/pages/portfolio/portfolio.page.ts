import { Component } from "@angular/core";

@Component({
	selector: `portfolio`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-300">Portfolio</h3>
		<p>This is where I would keep all my interesting projects</p>
		<ul>
			<li>
				<a
					mat-button
					href="https://nonnodacciaio.github.io/marcosabau.github.io/"
					class="hover:underline cursor-pointer"
					color="accent"
					>My very old portfolio page</a
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
					>Meteo app</a
				>&nbsp;<a
					mat-button
					[routerLink]="'meteo'"
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
