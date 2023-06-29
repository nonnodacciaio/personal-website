import { Component } from "@angular/core";

@Component({
	selector: `contacts`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-500">Contacts</h3>
		<p>Feel free to get in touch with me using the following methods:</p>
		<ul>
			<li>Email: marco.sabau98@gmail.com</li>
			<li>GitHub: github.com/nonnodacciaio</li>
		</ul>
	</div>`
})
export class ContactsPage {}
