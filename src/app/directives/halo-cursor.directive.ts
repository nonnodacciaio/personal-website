import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
	selector: "[haloCursor]"
})
export class HaloCursorDirective {
	private halo: HTMLElement;

	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.halo = this.renderer.createElement("div");
		this.renderer.addClass(this.halo, "halo");
		this.renderer.appendChild(this.el.nativeElement, this.halo);
	}

	@HostListener("mousemove", ["$event"])
	onMouseMove(event: MouseEvent) {
		const x = event.clientX - this.el.nativeElement.getBoundingClientRect().x - 5;
		const y = event.clientY - this.el.nativeElement.getBoundingClientRect().y - 5;

		this.renderer.setStyle(this.halo, "transform", `translate(${x}px, ${y}px)`);
	}
}
