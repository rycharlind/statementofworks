import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'qu-link',
	templateUrl: './link.html'
})
export class LinkComponent {
	@Input() qlHref? : string;

	constructor() {
	}
}