import {Directive, ElementRef, OnDestroy, Host, HostListener} from "@angular/core";
import {Dropdown} from "./dropdown.dir";

@Directive({
    selector: "[dropdown-open]"
})
export class DropdownOpen implements OnDestroy {

    private openedByFocus: boolean = false;
 
    private closeDropdownOnOutsideClick = (event: MouseEvent) => this.close(event);

    constructor(@Host() public dropdown: Dropdown,
                private elementRef: ElementRef) {
    }

    @HostListener("click")
    openDropdown() {

        

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

    @HostListener("keydown", ["$event"])
    dropdownKeydown(event: KeyboardEvent) {
        if (event.keyCode === 40) { // down
            this.openDropdown();
        }
    }

    @HostListener("focus")
    onFocus() {
        if (!this.dropdown.activateOnFocus) return;
        this.openedByFocus = true;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    }

    @HostListener("blur", ["$event"])
    onBlur(event: FocusEvent) {
        if (!this.dropdown.activateOnFocus) return;
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(<HTMLElement> event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {

            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    }

    ngOnDestroy() {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick);
    }

    private close(event: Event) {
        if (!this.dropdown.isInClosableZone(<HTMLElement> event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick);
        }
    }

}