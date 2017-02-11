import {Provider} from '@angular/core';

import { ButtonComponent } from './button/button.comp';
import { FlexRowDirective, FlexColumnDirective, FlexAlignDirective } from './layout/flex/flex.dir';
import { LinkComponent } from './link/link.comp';
import { InputContainerComponent } from './input-container/input-container.comp';
import { SideNavComponent } from './side-nav/side-nav.comp';
import { DropdownNotClosableZone } from './dropdown/dropdown-not-closable-zone.dir';
import { Dropdown } from './dropdown/dropdown.dir'; 
import { DropdownOpen } from './dropdown/dropdown-open.dir';
import { TextareaContainerComponent } from './textarea-container/textarea-container.comp';

export const quSquaredProvider: Provider[] = [
	ButtonComponent,
	FlexAlignDirective,
  	FlexColumnDirective,
	FlexRowDirective,
	InputContainerComponent,	 
	LinkComponent,
	SideNavComponent,
	Dropdown,
	DropdownOpen,
	TextareaContainerComponent
];