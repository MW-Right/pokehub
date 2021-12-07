import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[w50]'
})
export class Width50ColumnDirective {
    constructor(private _el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this._el.nativeElement, 'w-100');
        this.renderer.addClass(this._el.nativeElement, 'w-md-50');
        this.renderer.addClass(this._el.nativeElement, 'position-relative');
    }
}