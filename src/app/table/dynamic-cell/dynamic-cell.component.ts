import { AfterViewInit, Component, Input, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-cell',
  imports: [],
  templateUrl: './dynamic-cell.component.html',
  styleUrl: './dynamic-cell.component.scss',
})
export class DynamicCellComponent implements AfterViewInit {
  @Input() componentOrTemplate!: Type<unknown> | TemplateRef<unknown>;
  @Input() context!: any;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  ngAfterViewInit(): void {
    if (!this.componentOrTemplate) {
      this.container.createEmbeddedView(this.context)
    } else if (this.componentOrTemplate instanceof TemplateRef) {
      this.container.createEmbeddedView(this.componentOrTemplate, this.context);
    } else {
      this.container.createComponent(this.componentOrTemplate);
    }
  }
}
