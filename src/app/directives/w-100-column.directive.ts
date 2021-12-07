import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[w100]'
})
export class Width100ColumnDirective {
    constructor(private _el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this._el.nativeElement, 'w-100');
        this.renderer.addClass(this._el.nativeElement, 'position-relative');
    }
}