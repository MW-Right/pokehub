import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[hover-class]'
})
export class HoverClassDirective {
    constructor(public elementRef: ElementRef) { }
    
    @Input('hover-class') hoverClass: string = '';
    @HostListener('mouseenter') onMouseEnter() {
        this.elementRef.nativeElement.classList.add(this.hoverClass);
        console.log(this.elementRef.nativeElement.classList);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.classList.remove(this.hoverClass);
        console.log(this.elementRef.nativeElement.classList);
    }
}