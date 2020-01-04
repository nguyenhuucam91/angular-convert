/* =========CHANGE CONFIGURATION ======== */
const linkhay_url = 'https://linkhay.com' // change this to domain
const linkhay_post_url = 'https://post.linkhay.com';
const postKey = '1'; // ==> change to generated key
/* ==========END CHANGE ======================== */

var editor = new MediumEditor('.editable', {
  toolbar: {
      buttons: [
          'bold', 'italic', 'anchor', 'justifyLeft', 'justifyCenter', 'justifyRight',
          'h2','h3', 'unorderedlist', 'quote','removeFormat',
      ],
  },
  buttonLabels: 'fontawesome',
  imageDragging: false, /** disable image dragging **/
  targetBlank: true, /** enables/disables target="_blank" for anchor tags. Default: false **/
  autoLink: true,
  anchor: {
      customClassOption: null,
      customClassOptionText: 'Button',
      linkValidation: false,
      placeholderText: 'Paste or type a link',
      targetCheckboxText: 'Open in new window'
  },
  paste: {
      forcePlainText: true,
      cleanPastedHTML: false,
      cleanAttrs: ['class', 'style', 'dir'],
      cleanTags: []
  },
  spellcheck: false,
});

$(function() {
  $('.editable').mediumInsert({
    editor: editor,
    addons: {
      images: {
        label: "<svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M9 11.5C10.933 11.5 12.5 9.933 12.5 8C12.5 6.067 10.933 4.5 9 4.5C7.067 4.5 5.5 6.067 5.5 8C5.5 9.933 7.067 11.5 9 11.5Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        <path d='M2.5 4.5H3.5' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        <path d='M14.5 2.5H12.5L11.5 0.5H6.5L5.5 2.5H1.5C0.948 2.5 0.5 2.948 0.5 3.5V12.5C0.5 13.052 0.948 13.5 1.5 13.5H14.5C15.052 13.5 15.5 13.052 15.5 12.5V3.5C15.5 2.948 15.052 2.5 14.5 2.5Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        </svg>",
        fileUploadOptions: {
            // url: linkhay_url + `/user/media/upload?is_editor=true&name=${postKey}`, //Change name to match blog_post_key at line 4
            // type: 'post',
            // acceptFileTypes: /(.|\/)(gif|jpe?g|png)$/i
        },
        uploadCompleted: function($el, data) {
            if (!data.result || typeof data.result.files[0].url != 'string') {
                alert('Can not get image file');
                return;
            }
            $el.find("img").attr({'data-source':'lh-user-media', 'data-lh-media-id': data.result.files[0].media_id, 'data-w': data.result.files[0].width, 'data-h': data.result.files[0].height});
            //self._insertImageCollection(data.result.files[0]);
        },
        deleteScript: null,
        captionPlaceholder: 'Nhập tiêu đề ảnh',
        styles: {
          wide: {
            label: "<span class='lh-button-align-block'>\
            <svg width='32' height='16' viewBox='0 0 32 16'>\
            <path d='M28.909 7.08544H32V8.91403H28.909V12.5712L23.9999 7.99973L28.909 3.42828V7.08544Z'></path>\
            <path d='M3.09098 8.91437H0V7.08579H3.09098V3.42863L8.00006 8.00008L3.09098 12.5715V8.91437Z'></path>\
            <path d='M10 0H22V16H10V0Z'></path>\
            </svg></span>"
          },
          left: false,
          right: false,
          grid: false,
          fit: {
            label: "<span class='lh-button-align-fit'>\
            <svg width='24' height='16' viewBox='0 0 24 16'>\
            <path d='M6 0H18V16H6V0Z'></path>\
            <path d='M0 0H2V16H0V0Z'></path>\
            <path d='M24 16H22V0H24V16Z'></path>\
            </svg></span>"
          },
          full: {
            label: '<span class="lh-button-align-full">' +
                '<svg width="32" height="16" viewBox="0 0 32 16">\n' +
                '<path d="M27.091 7.08551H24V8.91409H27.091V12.5712L32.0001 7.9998L27.091 3.42834V7.08551Z"/>\n' +
                '<path d="M4.90902 7.08551H8V8.91409H4.90902V12.5712L-6.10352e-05 7.9998L4.90902 3.42834V7.08551Z"/>\n' +
                '<path d="M10 0H22V16H10V0Z"/>\n' +
                '</svg>\n' +
                '</span>'
            },
        }
      },
      embeds: {
        label:"<svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\
        <path d='M1.1875 0.4375L11.6875 7L1.1875 13.5625V0.4375Z' stroke='#333333' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'></path>\
        </svg>",
        styles: {
          left: false,
          right: false,
          grid: false,
          fit: {
            label: "<span class='lh-button-align-fit'>\
                    <svg width='24' height='16' viewBox='0 0 24 16'>\
                    <path d='M6 0H18V16H6V0Z'></path>\
                    <path d='M0 0H2V16H0V0Z'></path>\
                    <path d='M24 16H22V0H24V16Z'></path>\
                    </svg>\
                    </span>"
          },
          full: {
            label: '<span class="lh-button-align-full">' +
                '<svg width="32" height="16" viewBox="0 0 32 16">\n' +
                '<path d="M27.091 7.08551H24V8.91409H27.091V12.5712L32.0001 7.9998L27.091 3.42834V7.08551Z"/>\n' +
                '<path d="M4.90902 7.08551H8V8.91409H4.90902V12.5712L-6.10352e-05 7.9998L4.90902 3.42834V7.08551Z"/>\n' +
                '<path d="M10 0H22V16H10V0Z"/>\n' +
                '</svg>\n' +
                '</span>'
          },
        }
      },
      customQuote: {},
      highLight: true,
      hr: true,
    },
    position: {
        left: function() {
            // console.log((window.innerWidth - 760) / 2 - 45);
            // return (window.innerWidth - 760) / 2 - 45;
        }
    }
  });
})

// this._submitForm = function (editor) {
//     $(".js-btn-publish").on('click', function () {
//         var content = editor.serialize()['linkhay-editor'].value,
//             media_collection = [],
//             _content = $('<div />').html(content);

//         $("img[data-source='lh-user-media']", _content).each(function(){
//             media_collection.push($(this).attr('data-lh-media-id'));
//         });

//         if (_form.attr('disabled') === 'disabled') {
//             return;
//         }
//         publish_flag = 1;

//         var btn = $(this),
//             blog_link_id = $("input[name='blog_link_id']").val(),
//             data = {
//                 id: $("#blog_id").val(),
//                 blog_title: $(".js-input-blog-title").osc_nodeTextEditor('getcontent'),
//                 blog_type: $("input[name='blog_type']").val(),
//                 cover_photo: $("input[name='cover_photo']").val(),
//                 cover_description: $(".js-cover-description").osc_nodeTextEditor('getcontent'),
//                 source_photo: $("input[name='source_photo']").val(),
//                 source_link: $("input[name='source_link']").val(),
//                 media_collection: media_collection,
//                 blog_content: content,
//                 publish_flag: publish_flag ? 1 : 0,
//                 blog_link_id: blog_link_id
//             };

//         if (!data.blog_title) {
//             alert("Vui lĂ²ng nháº­p tiĂªu Ä‘á» blog");
//             return;
//         }

//         if (!data.blog_content) {
//             alert("Vui lĂ²ng nháº­p ná»™i dung blog");
//             return;
//         }

//         _form.attr('disabled', 'disabled');
//         $.ajax({
//             url: linkhay_url + '/blog/post/save',
//             type: 'post',
//             data: data,
//             crossDomain: true,
//             xhrFields: {withCredentials: true},
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest',
//                 'X-OSC-Cross-Request': 'OK'
//             },
//             beforeSend: function () {
//                 self._disabledForm(_form, btn);
//             },
//             success: function (response) {
//                 if (response.result === 'OK') {
//                     if (blog_link_id > 0) {
//                         alert("Blog đã được cập nhật");
//                         self._activeForm(_form, btn);
//                     } else {
//                         window.location.href = response.data;
//                     }

//                 } else {
//                     self._activeForm(_form, btn);
//                     alert(response.message);
//                 }
//             },
//             error: function () {
//                 self._activeForm(_form, btn);
//                 alert("Error");
//             }
//         });

//     });
// };
// self._submitForm(editor);

