import { Renderer2, Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var MediumEditor: any;
declare var $: any


@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})


export class MediumComponent implements OnInit, AfterViewInit {

  renderScript(documentBody, renderer, scriptSrc) {
    const scriptElement = renderer.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = scriptSrc;
    scriptElement.text = ``;
    this.renderer2.appendChild(documentBody, scriptElement);
  }

  // editor:any;

  // @ViewChild('editable',{static:true}) editable:ElementRef;

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.renderScript(this._document.body, this.renderer2, '../../assets/vendor/rich-editor/js/medium-insert-plugin-base.js')
    this.renderScript(this._document.body, this.renderer2, '../../assets/vendor/rich-editor/js/plugins/addon-insert-hr.js')
  }
}
