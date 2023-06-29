import { Component } from "@angular/core";

@Component({
	selector: `portfolio`,
	template: `<div class="sm:w-full md:w-1/2 mx-auto my-3 p-3 md:shadow rounded">
		<h3 class="text-amber-500">Portfolio</h3>
		<p>This is where I would keep all my interesting projects... if I had any</p>
		<p>
			To be fair at the moment I haven't made anything super interesting outside work apart for this website, but I want to work on open source projects to hone my skills and to see what's out
			there, so maybe after that this section won't be so empty
		</p>
		<p>For now you can enjoy this cringey page I made quite a while ago:</p>
		<ul>
			<li>
				<a
					mat-button
					href="https://nonnodacciaio.github.io/marcosabau.github.io/"
					target="_blank"
					class="hover:underline cursor-pointer"
					>My very old portfolio page</a
				>
			</li>
		</ul>
	</div>`
})
export class PortfolioPage {}
