import { Injectable, ElementRef, Renderer } from '@angular/core';

@Injectable()
export class SideNavService {
	private element : HTMLElement;
	private elementHeader : HTMLElement;

	constructor(private renderer: Renderer) { 
	}

	toggle() {		
		if (this.isOpen()) {
			this.close();
		}
		else{
			this.open();
		}
	}

	isOpen() {
		this.element = document.getElementById('quSideNav');
		this.elementHeader = document.getElementById('header');
		return this.element.classList.contains('qu-side-nav-open');
	}

	private open() {
		this.renderer.setElementClass(this.element, 'qu-side-nav-open', true);
		this.renderer.setElementClass(this.element, 'qu-side-nav-close', false);
		
		this.renderer.setElementClass(this.elementHeader, 'qu-side-nav-open', true);
		this.renderer.setElementClass(this.elementHeader, 'qu-side-nav-close', false);
}

	private close() {
		this.renderer.setElementClass(this.element, 'qu-side-nav-open', false);
		this.renderer.setElementClass(this.element, 'qu-side-nav-close', true);
		
		this.renderer.setElementClass(this.elementHeader, 'qu-side-nav-open', false);
		this.renderer.setElementClass(this.elementHeader, 'qu-side-nav-close', true);
	}
}