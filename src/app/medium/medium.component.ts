import { Renderer2, Component, OnInit, Inject, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: [
    '../../assets/vendor/rich-editor/css/style.css',
    '../../assets/vendor/rich-editor/css/mediumEditor.css',
    '../../assets/vendor/rich-editor/css/normalize.css',
    '../../assets/vendor/rich-editor/css/dark.css',
    '../../assets/vendor/rich-editor/css/rich-editor-content.css',
  ],
  encapsulation: ViewEncapsulation.None
})


export class MediumComponent implements OnInit, AfterViewInit {

  renderScript(documentBody, renderer, scripts) {
    scripts.map(script => {
      const scriptElement = renderer.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.src = script;
      scriptElement.text = ``;
      this.renderer2.appendChild(documentBody, scriptElement);
    })
  }

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    var scripts = [
      "../../assets/vendor/rich-editor/js/mediumEditorTemplates.js",
      "../../assets/vendor/rich-editor/js/plugins/hr.js",
      "../../assets/vendor/rich-editor/js/plugins/highlight.js",
      "../../assets/vendor/rich-editor/js/plugins/custom-quote.js",
      "../../assets/vendor/rich-editor/js/medium-insert-plugin-base.js"
    ];

    this.renderScript(this._document.body, this.renderer2, scripts);
  }

  publish() {
    //get content:
    console.log($('editable').html())
  }
}
