import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import ICONS from './medium-images-icons';

declare var MediumEditor: any;
declare var $: any

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})

export class MediumComponent implements OnInit {

  editor:any;

  @ViewChild('editable',{static:true}) editable:ElementRef;

  constructor() { }

  ngOnInit() {

    //start editor
    this.editor = new MediumEditor(this.editable.nativeElement, {
      toolbar: {
        buttons: [
          {
            name: 'bold',
            contentDefault: ICONS.BOLD
          },
          {
            name: 'italic',
            contentDefault: ICONS.ITALIC
          },
          {
            name: 'underline',
            contentDefault: ICONS.UNDERLINE
          },
          {
            name: 'anchor',
            contentDefault: ICONS.LINK
          },
          {
            name: 'justifyLeft',
            contentDefault: ICONS.ALIGN_TEXT_LEFT
          },
          {
            name: 'justifyCenter',
            contentDefault: ICONS.ALIGN_TEXT_CENTER
          },
          {
            name: 'justifyRight',
            contentDefault: ICONS.ALIGN_TEXT_RIGHT
          },
          {
            name: 'h2',
            contentDefault: ICONS.H2
          },
          {
            name: 'h3',
            contentDefault: ICONS.H3
          },
          {
            name:'unorderedlist',
            contentDefault: ICONS.UNORDERED_LIST
          },
          {
            name: 'quote',
            contentDefault: ICONS.QUOTE
          },
          {
            name: 'removeFormat',
            contentDefault: ICONS.ERASER
          }
      ]
      },
    })


    $(".editable").mediumInsert({
        editor: this.editor,
        addons: {
          images: {
            autoGrid: 0,
            styles: {
              wide: {
                label: ICONS.ALIGN_BLOCK
              },
              left: false,
              right: false,
              grid: false,
              fit: {
                label: ICONS.IMAGE_FIT
              },
              full: {
                label: ICONS.IMAGE_FULL
              }
            },

            actions: { // (object) Actions for an optional second toolbar
              remove: { // (object) Remove action configuration
                label: ICONS.REMOVE, // (string) Label for an action
              }
            },
          },
          //for embeded documents
          embeds: {
            styles: {
              wide: false,
              left: false,
              right: false,
              grid: false,
              fit: {
                label: ICONS.IMAGE_FIT
              },
              full: {
                label: ICONS.IMAGE_FULL
              }
            }
          }
        },
        extensions: {

        }
    })
  }
}
