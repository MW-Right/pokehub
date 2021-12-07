import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[w33]'
})
export class Width33ColumnDirective {
    constructor(private _el: ElementRef, private renderer: Renderer2) {
        this.renderer.addClass(this._el.nativeElement, 'w-100');
        this.renderer.addClass(this._el.nativeElement, 'w-md-33');
        this.renderer.addClass(this._el.nativeElement, 'position-relative');
    }
}