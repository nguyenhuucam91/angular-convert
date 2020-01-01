import { Renderer2, Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import ICONS from './medium-images-icons';
import { DOCUMENT } from '@angular/common';

declare var MediumEditor: any;
declare var $: any

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})

export class MediumComponent implements OnInit {

  // editor:any;

  // @ViewChild('editable',{static:true}) editable:ElementRef;

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) {

   }


  ngOnInit() {

    const base = this.renderer2.createElement('script');
    base.type = 'text/javascript';
    base.src = '../../assets/vendor/rich-editor/js/medium-insert-plugin-base.js';
    base.text = ``;
    this.renderer2.appendChild(this._document.body, base);

    const addonInsertHr = this.renderer2.createElement('script');
    addonInsertHr.type = 'text/javascript';
    addonInsertHr.src = '../../assets/vendor/rich-editor/js/plugins/addon-insert-hr.js';
    addonInsertHr.text = ``;
    this.renderer2.appendChild(this._document.body, addonInsertHr);

    //start editor
    // this.editor = new MediumEditor(this.editable.nativeElement, {
    //   toolbar: {
    //     buttons: [
    //       {
    //         name: 'bold',
    //         contentDefault: ICONS.BOLD
    //       },
    //       {
    //         name: 'italic',
    //         contentDefault: ICONS.ITALIC
    //       },
    //       {
    //         name: 'underline',
    //         contentDefault: ICONS.UNDERLINE
    //       },
    //       {
    //         name: 'anchor',
    //         contentDefault: ICONS.LINK
    //       },
    //       {
    //         name: 'justifyLeft',
    //         contentDefault: ICONS.ALIGN_TEXT_LEFT
    //       },
    //       {
    //         name: 'justifyCenter',
    //         contentDefault: ICONS.ALIGN_TEXT_CENTER
    //       },
    //       {
    //         name: 'justifyRight',
    //         contentDefault: ICONS.ALIGN_TEXT_RIGHT
    //       },
    //       {
    //         name: 'h2',
    //         contentDefault: ICONS.H2
    //       },
    //       {
    //         name: 'h3',
    //         contentDefault: ICONS.H3
    //       },
    //       {
    //         name:'unorderedlist',
    //         contentDefault: ICONS.UNORDERED_LIST
    //       },
    //       {
    //         name: 'quote',
    //         contentDefault: ICONS.QUOTE
    //       },
    //       {
    //         name: 'removeFormat',
    //         contentDefault: ICONS.ERASER
    //       }
    //   ]
    //   },
    // })


    // $(".editable").mediumInsert({
    //     editor: this.editor,
    //     addons: {
    //       images: {
    //         label: ICONS.CAMERA,
    //         autoGrid: 0,
    //         styles: {
    //           wide: {
    //             label: ICONS.ALIGN_BLOCK
    //           },
    //           left: false,
    //           right: false,
    //           grid: false,
    //           fit: {
    //             label: ICONS.IMAGE_FIT
    //           },
    //           full: {
    //             label: ICONS.IMAGE_FULL
    //           }
    //         },

    //         actions: { // (object) Actions for an optional second toolbar
    //           remove: { // (object) Remove action configuration
    //             label: ICONS.REMOVE, // (string) Label for an action
    //           }
    //         },
    //       },
    //       //for embeded documents
    //       embeds: {
    //         label: ICONS.PLAY,
    //         styles: {
    //           wide: false,
    //           left: false,
    //           right: false,
    //           grid: false,
    //           fit: {
    //             label: ICONS.IMAGE_FIT
    //           },
    //           full: {
    //             label: ICONS.IMAGE_FULL
    //           }
    //         }
    //       },

    //       hr: {

    //       }
    //     }
    // })
  }
}
