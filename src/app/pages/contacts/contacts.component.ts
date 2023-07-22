import { Component } from "@angular/core";

@Component({
	selector: `contacts`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-300">{{ "contacts.title" | transloco }}</h3>
		<p>{{ "contacts.body" | transloco }}:</p>
		<ul>
			<li
				class="m-3"
				aria-label="Email">
				<i class="fa-solid fa-envelope"></i>&nbsp;marco.sabau98@gmail.com
			</li>
			<li
				class="m-3"
				aria-label="GitHub Profile">
				<i class="fa-brands fa-github"></i>&nbsp;<a
					class="text-amber-300 hover:underline"
					href="https://www.github.com/nonnodacciaio"
					>github.com/nonnodacciaio</a
				>&nbsp;<a
					href="https://www.github.com/nonnodacciaio"
					target="_blank"
					rel="noopener noreferrer"
					class="text-amber-300 hover:underline"
					aria-label="Open GitHub Profile in a new tab"
					><i class="fas fa-up-right-from-square"></i
				></a>
			</li>
		</ul>
	</div>`
})
export class ContactsPage {}
