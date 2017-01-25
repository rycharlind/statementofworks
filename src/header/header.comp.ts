import { Component } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import {MdMenu} from '@angular/material';

import { SideNavService } from '../../quSquared/side-nav/side-nav.svc';

@Component({
  	selector: 'sl-header',
  	templateUrl: './header.html',
	providers: [SideNavService]
})
export class HeaderComponent { 

	constructor(
		private sideNavSvc: SideNavService,
		private router: Router
	) 
	{

	}

	toggle() {
		this.sideNavSvc.toggle();
	}

	goTo(route) {
		this.router.navigate([route]);
	}
}
