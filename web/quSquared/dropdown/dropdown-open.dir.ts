import { Directive, ElementRef, OnDestroy, Host, HostListener } from "@angular/core";
import { Dropdown } from "./dropdown.dir";

@Directive({
    selector: "[dropdown-open]"
})

export class DropdownOpen implements OnDestroy {

    private closeDropdownOnOutsideClick = (event: MouseEvent) => this.close(event);
    private openedByFocus: boolean = false;

    constructor( @Host() public dropdown: Dropdown,
        private elementRef: ElementRef) {
    }

    @HostListener("click")
    openDropdown() {
        console.log("Open Dropdown");
        if (this.dropdown.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }

        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        } else {
            this.dropdown.open();
            document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    }

    ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick);
    }

    private close(event: Event) {
        if  (event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    }


}