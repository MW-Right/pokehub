import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[w25]'
})
export class Width25ColumnDirective {
    constructor(private _el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this._el.nativeElement, 'w-100');
        this.renderer.addClass(this._el.nativeElement, 'w-md-25');
        this.renderer.addClass(this._el.nativeElement, 'position-relative');
    }
}