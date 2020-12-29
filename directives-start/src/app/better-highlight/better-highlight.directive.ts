import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener("mouseenter") mouseEnter(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "blue"
    );
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "transparent"
    );
  }
}
