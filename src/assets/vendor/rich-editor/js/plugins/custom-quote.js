/** insert CustomQuote **/
;(function ($, window, document, undefined) {
  'use strict';

  /** Default values */
  var instance = null,
      pluginName = 'mediumInsert',
      addonName = 'CustomQuote', // first char is uppercase
      defaults = {
          label: '<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
              '                                    <path d="M3.24397 7.73301C3.20544 7.00638 3.45214 6.08913 4.22268 5.1409C4.89767 4.31026 5.69758 3.70735 6.62486 3.32223L7.12871 3.11296L6.87639 2.62923L6.42756 1.76876L6.20673 1.3454L5.77365 1.54651C4.03826 2.35241 2.70982 3.42714 1.82176 4.78438C0.93861 6.13411 0.5 7.66057 0.5 9.34884C0.5 10.648 0.805292 11.9217 1.48788 12.8856C2.18435 13.8691 3.25562 14.5 4.68505 14.5C5.96711 14.5 7.1237 13.8508 7.78129 12.7718C8.56109 11.4923 8.47386 9.51742 7.22037 8.36454L7.22037 8.36454C6.19119 7.41799 4.59055 7.10008 3.24397 7.73301ZM11.4645 7.73356C11.4258 7.00684 11.6724 6.08938 12.4432 5.1409C13.1181 4.31026 13.918 3.70735 14.8453 3.32222L15.3492 3.11295L15.0969 2.62923L14.648 1.76876L14.4272 1.3454L13.9941 1.54651C12.2587 2.35241 10.9303 3.42714 10.0422 4.78438C9.15908 6.13411 8.72047 7.66058 8.72047 9.34884C8.72047 10.648 9.02576 11.9217 9.70834 12.8856C10.4048 13.8691 11.4761 14.5 12.9055 14.5C14.8729 14.5 16.5 13.0244 16.5 10.9535C16.5 9.85928 16.101 8.96078 15.4295 8.33861C14.7633 7.72143 13.8627 7.40697 12.9055 7.40697C12.3975 7.40697 11.916 7.51787 11.4645 7.73356Z" stroke="#333333"></path>\n' +
              '                                </svg>',
          icons: {
              defaultBrand: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 19H2V5H11V3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H16C17.1 21 18 20.1 18 19V10H16V19ZM8.21 15.83L6.25 13.47L3.5 17H14.5L10.96 12.29L8.21 15.83ZM18 3V0H16V3H13C13.01 3.01 13 5 13 5H16V7.99C16.01 8 18 7.99 18 7.99V5H21V3H18Z" fill="#B0B0B0"></path></svg>'
          }
      },
      options = {
          styles: {
              edit: {
                  label: 'Edit',
                  clicked: function (e) {
                      instance.edit = true;
                      var selectedElement = $('.medium-insert-customQuote.medium-insert-customQuote-selected'),
                          elementContent = selectedElement.find('.card-text').html(),
                          elementImage = selectedElement.find('.avatar').html(),
                          elementBrandName = selectedElement.find('.official').text(),
                          elementLink = selectedElement.find('.link-site a').attr('href'),
                          elementTemplate = selectedElement.find('.lh-quote-card').data('template');

                      instance.selectedElement = selectedElement;
                      instance.add(true, [elementContent,elementImage,elementBrandName,elementLink,elementTemplate]);
                  }
              }
          },
          actions: {
              remove: {
                  label: '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                      '<g opacity="0.5">\n' +
                      '<g filter="url(#filter0_d)">\n' +
                      '<circle cx="19" cy="17" r="17" fill="black"/>\n' +
                      '<circle cx="19" cy="17" r="16.25" stroke="white" stroke-width="1.5"/>\n' +
                      '</g>\n' +
                      '<path d="M18.125 16H16.375V22H18.125V16Z" fill="white"/>\n' +
                      '<path d="M21.625 16H19.875V22H21.625V16Z" fill="white"/>\n' +
                      '<path d="M22.5 10C22.5 9.4 22.15 9 21.625 9H16.375C15.85 9 15.5 9.4 15.5 10V12H12V14H12.875V24C12.875 24.6 13.225 25 13.75 25H24.25C24.775 25 25.125 24.6 25.125 24V14H26V12H22.5V10ZM17.25 11H20.75V12H17.25V11ZM23.375 14V23H14.625V14H23.375Z" fill="white"/>\n' +
                      '</g>\n' +
                      '<defs>\n' +
                      '<filter id="filter0_d" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
                      '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
                      '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
                      '<feOffset dy="2"/>\n' +
                      '<feGaussianBlur stdDeviation="1"/>\n' +
                      '<feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.15 0"/>\n' +
                      '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
                      '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
                      '</filter>\n' +
                      '</defs>\n' +
                      '</svg>\n',
                  clicked: function () {
                      var e = $.Event("keydown");
                      e.which = 8, $(document).trigger(e)
                  }
              }
          }
      };

  /**
   * Custom Addon object
   *
   * Sets options, variables and calls init() function
   *
   * @constructor
   * @param {DOM} el - DOM element to init the plugin on
   * @param {object} options - Options to override defaults
   * @return {void}
   */

  function CustomAddon(el, options) {
      this.el = el;
      this.$el = $(el);
      this.templates = window.MediumInsert.Templates;
      this.core = this.$el.data('plugin_'+ pluginName);

      this.options = $.extend(true, {}, defaults, options);

      this._defaults = defaults;
      this._name = pluginName;

      this.edit = false;

      this.init();
  }

  /**
   * Initialization
   *
   * @return {void}
   */

  CustomAddon.prototype.init = function () {
      var e = this.$el.find(".medium-insert-customQuote");
      e.find(".customQuoteContent").attr("contenteditable", !1), this.events()
  },

  CustomAddon.prototype.selectcustomQuote = function (e) {
      var t, i = this,
          t = $(e.target);
      if (t.hasClass('medium-insert-customQuote') == false) {
          t = $(t).parents('.medium-insert-customQuote');
      }

      t.addClass('medium-insert-customQuote-selected'),
          setTimeout(function () {
              i.addToolbar()
          }, 50),
          this.$currentcustomQuote = t,
          this.$el.blur();
  },

  CustomAddon.prototype.unselectcustomQuote = function (e) {
      var t = $(e.target).hasClass("medium-insert-customQuote") ? $(e.target) : $(e.target).closest(".medium-insert-customQuote"),
          i = this.$el.find(".medium-insert-customQuote-selected"),
          b = $(e.target);
      if ($(b).hasClass('medium-editor-action') || $(b).parents('button:first').hasClass('medium-editor-action')) {
          return;
      }
      if (t.hasClass("medium-insert-customQuote-selected")) return i.not(t).removeClass("medium-insert-customQuote-selected"), $(".medium-insert-customQuote-toolbar, .medium-insert-customQuote-toolbar2").remove();
      i.removeClass("medium-insert-customQuote-selected"), $(".medium-insert-customQuote-toolbar, .medium-insert-customQuote-toolbar2").remove();
  },

  CustomAddon.prototype.removecustomQuote = function (e) {
      var t, i;
      8 !== e.which && 46 !== e.which || (t = this.$el.find(".medium-insert-customQuote-selected")).length && (e.preventDefault(), $(".medium-insert-customQuote-toolbar, .medium-insert-customQuote-toolbar2").remove(), i = $(this.templates["src/js/templates/core-empty-line.hbs"]().trim()), t.before(i), t.remove(), this.core.hideAddons(), this.core.moveCaret(i), this.core.triggerInput())
  },

  CustomAddon.prototype.addToolbar = function () {
      var e, t,
          i = this.$el.find(".medium-insert-customQuote-selected").closest(".medium-insert-customQuote"),
          s = !1,
          o = this.core.getEditor().options.elementsContainer || "body";
      $(o).append(this.templates["src/js/templates/customQuote-toolbar.hbs"]({
          styles: options.styles,
          actions: options.actions
      }).trim());
      e = $(".medium-insert-customQuote-toolbar"), t = $(".medium-insert-customQuote-toolbar2"), e.find("button").each(function () {
          i.hasClass("medium-insert-customQuote-" + $(this).data("action")) && ($(this).addClass("medium-editor-button-active"), s = !0)
      }), !1 === s && e.find("button").first().addClass("medium-editor-button-active"), this.repositionToolbars(), e.fadeIn(), t.fadeIn()
  },

  CustomAddon.prototype.autoRepositionToolbars = function () {
      setTimeout(function () {
          this.repositionToolbars(), this.repositionToolbars()
      }.bind(this), 0)
  },

  CustomAddon.prototype.repositionToolbars = function () {
      var e = $(".medium-insert-customQuote-toolbar"),
          t = $(".medium-insert-customQuote-toolbar2"),
          i = this.$el.find(".medium-insert-customQuote-selected .customQuoteContent"),
          s = this.core.getEditor().options.elementsContainer,
          o = -1 < ["absolute", "fixed"].indexOf(window.getComputedStyle(s).getPropertyValue("position")),
          n = o ? s.getBoundingClientRect() : null,
          a = $(window).width(),
          r = {};
      if (typeof (i.offset()) == 'undefined') {
          return;
      }

      t.find('.medium-editor-action[data-action="edit"]').css({
          position: 'absolute',
          top: i.height() - 46,
          left: -(i.width() / 2 + 40)
      });
      t.length && (r.top = i.offset().top + 2, r.left = i.offset().left + i.width() - t.width() - 4, o && (r.top += s.scrollTop - n.top, r.left -= n.left, a = $(s).width()), r.left + t.width() > a && (r.left = a - t.width()), t.css(r)), e.length && (r.left = i.offset().left + i.width() / 2 - e.width() / 2, r.top = i.offset().top - e.height() - 8 - 2 - 5, o && (r.top += s.scrollTop - n.top, r.left -= n.left), r.top < 0 && (r.top = 0), e.css(r))
  },

  CustomAddon.prototype.toolbarAction = function (e) {
      var t = $(e.target).is("button") ? $(e.target) : $(e.target).closest("button"),
          i = (options.styles[t.data("action")] || {}).clicked;
      i && i(this.$el.find(".medium-insert-customQuote-selected")), this.core.triggerInput(), this.repositionToolbars()
  },

  CustomAddon.prototype.toolbar2Action = function (e) {
      var t = $(e.target).is("button") ? $(e.target) : $(e.target).closest("button"),
          i = (options.actions[t.data("action")] || {}).clicked;
      i && i(this.$el.find(".medium-insert-customQuote-selected")), this.core.triggerInput(), this.repositionToolbars()
  };

  /**
   * Event listeners
   *
   * @return {void}
   */

  CustomAddon.prototype.events = function () {
      $(document).on("click", $.proxy(this, "unselectcustomQuote"))
          .on("keydown", $.proxy(this, "removecustomQuote"))
          .on("click", ".medium-insert-customQuote-toolbar .medium-editor-action", $.proxy(this, "toolbarAction"))
          .on("click", ".medium-insert-customQuote-toolbar2 .medium-editor-action", $.proxy(this, "toolbar2Action")),
          this.$el.on("click", ".medium-insert-customQuote .customQuoteContent", $.proxy(this, "selectcustomQuote")),
          $(document).on("resize", $.proxy(this, "autoRepositionToolbars"));
  };

  /**
   * Get the Core object
   *
   * @return {object} Core object
   */
  CustomAddon.prototype.getCore = function () {
      return this.core;
  };

  /**
   * Add custom content
   *
   * This function is called when user click on the addon's icon
   *
   * @return {void}
   */

  CustomAddon.prototype.add = function (isEdit, dataEdit) {
      this.edit = typeof(isEdit) != 'undefined' && isEdit == true ? true : false;
      this.selectedElement = this.edit == true ? this.selectedElement : null;
      editor.saveSelection();
      var _el = this.$el, self = this, html;

      this.content = '';
      this.image = defaults.icons.defaultBrand;
      this.brandName = '';
      this.link = '';
      this.template = 1;
      this.uploadText = 'Upload';

      if(this.edit == true && Array.isArray(dataEdit)) {
          this.content = dataEdit[0];
          this.image = dataEdit[1];
          this.brandName = dataEdit[2];
          this.link = dataEdit[3];
          this.template = dataEdit[4];
          this.uploadText = 'Edit';
      }

      this._mainBlock = '<div class="lh-editor-popupForm" id="lhCustomQuote" data-key="">\n' +
          '                <span class="editorClosePopup">\n' +
          '                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '                        <g opacity="0.5">\n' +
          '                            <g filter="url(#filter0_d)">\n' +
          '                                <circle cx="20" cy="18" r="18" fill="black"></circle>\n' +
          '                                <circle cx="20" cy="18" r="17.25" stroke="white" stroke-width="1.5"></circle>\n' +
          '                            </g>\n' +
          '                            <path d="M26.7498 11.25L13.25 24.7498" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>\n' +
          '                            <path d="M26.7498 24.7498L13.25 11.25" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"></path>\n' +
          '                        </g>\n' +
          '                        <defs>\n' +
          '                            <filter id="filter0_d" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
          '                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n' +
          '                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>\n' +
          '                                <feOffset dy="2"></feOffset>\n' +
          '                                <feGaussianBlur stdDeviation="1"></feGaussianBlur>\n' +
          '                                <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.15 0"></feColorMatrix>\n' +
          '                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>\n' +
          '                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>\n' +
          '                            </filter>\n' +
          '                        </defs>\n' +
          '                    </svg>\n' +
          '                </span>\n' +
          '                <div class="headbar">\n' +
          '                    <div class="titlebar">Tạo quote</div>\n' +
          '                </div>\n' +
          '                <div class="customQuotenBox">\n' +
          '                    <div class="boxContent">\n' +
          '                        <textarea name="customQuoteContent" maxlength="350" placeholder="Nhập nội dung tại đây">'+this.content+'</textarea>\n' +
          '                        <div class="char-count"><span class="character-count">0</span>/350</div>\n' +
          '                    </div>\n' +
          '                    <div class="boxBrand customQuoteInfo">\n' +
          '                        <label for="brandName">THƯƠNG HIỆU, TÁC GIẢ</label>\n' +
          '                        <div class="iconBrandInsert">\n' +
          '                            <div id="mediaPostContent">\n' +
          '                                <span class="brandIcon">'+this.image+'</span>\n' +
          '                                <div class="edit-button" id="iconBrandUpload">'+this.uploadText+'</div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <div class="inputCol">\n' +
          '                            <input type="text" name="brandName" id="brandName" value="'+this.brandName+'"/>\n' +
          '                            <span>Không bắt buộc</span>\n' +
          '                        </div>\n' +
          '                        <div class="clearfix"></div>\n' +
          '                    </div>\n' +
          '                    <div class="boxLinkAttach customQuoteInfo">\n' +
          '                        <label for="linkAttach">LINK ĐÍNH KÈM</label>\n' +
          '                        <div class="inputCol">\n' +
          '                            <input type="text" name="linkAttach" id="linkAttach" value="'+this.link+'"/>\n' +
          '                            <span>Không bắt buộc</span>\n' +
          '                        </div>\n' +
          '                        <div class="clearfix"></div>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="imageSubmitBox">\n' +
          '                    <button class="js-editorCustomQuoteSelectTemplate new-btn new-btn__width-icon new-btn__width-icon--blue">Tạo mới</button>\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="lh-editor-popupForm" id="selectTemplatesForm" style="display: none">\n' +
          '                <div class="card lh-quote-card lh-quote-card-1" data-template="1" data-active="true">\n' +
          '                    <div class="card-body">\n' +
          '                        <h5 class="card-title"><img src="'+linkhay_url+'/resource/template/image/default/core/editor/medium/quote.svg"> </h5>\n' +
          '                        <p class="card-text"></p>\n' +
          '                        <div class="card-footer">\n' +
          '                            <div class="col-sm-6 p-0 pull-left">\n' +
          '                                    <span class="avatar"></span>\n' +
          '                                <span class="official"></span>\n' +
          '                            </div>\n' +
          '                            <div class="col-sm-6 p-0 pull-left text-right">\n' +
          '                                <span class="link-site"> <i class="fa fa-external-link" aria-hidden="true"></i></span>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <div class="lh-quote-footer-button">\n' +
          '                        <button class="js-editCustomQuoteContentBtn btn btn-default btn-edit-quote">Sửa nội dung quote</button>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="card lh-quote-card lh-quote-card-2" data-template="2" style="display: none;">\n' +
          '                    <div class="card-body">\n' +
          '                        <h5 class="lh-quote-card-icon">\n' +
          '                            <span class="lh-quote-card-bg"></span>\n' +
          '                        </h5>\n' +
          '                        <p class="card-text"></p>\n' +
          '                        <div class="card-footer">\n' +
          '                            <div class="col-sm-6 p-0 pull-left">\n' +
          '                                    <span class="avatar"></span>\n' +
          '                                <span class="official"></span>\n' +
          '                            </div>\n' +
          '                            <div class="col-sm-6 p-0 pull-left text-right">\n' +
          '                                <span class="link-site"> <i class="fa fa-external-link" aria-hidden="true"></i></span>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <div class="lh-quote-footer-button">\n' +
          '                        <button class="js-editCustomQuoteContentBtn btn btn-default btn-edit-quote">Sửa nội dung quote</button>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="card lh-quote-card lh-quote-card-3" data-template="3" style="display: none;">\n' +
          '                    <div class="card-body">\n' +
          '                        <h5 class="card-title">\n' +
          '                            <div class="col-sm-12 p-0 text-center">\n' +
          '                                <div class="avatar"></div>\n' +
          '                                <div class="official mt-3"></div>\n' +
          '                            </div>\n' +
          '                        </h5>\n' +
          '                        <p class="card-text">\n' +
          '                            <img src="'+linkhay_url+'/resource/template/image/default/core/editor/medium/quote.svg"></p>\n' +
          '                        <div class="card-footer">\n' +
          '                            <div class="col-sm-12 p-0 pull-left text-center">\n' +
          '                                <span class="link-site"> <i class="fa fa-external-link" aria-hidden="true"></i></span>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <div class="lh-quote-footer-button">\n' +
          '                        <button class="js-editCustomQuoteContentBtn btn btn-default btn-edit-quote">Sửa nội dung quote</button>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="card lh-quote-card lh-quote-card-4" data-template="4" style="display: none;">\n' +
          '                    <div class="card-body">\n' +
          '                        <p><img src="'+linkhay_url+'/resource/template/image/default/core/editor/medium/quote.svg"> </p>\n' +
          '                        <p class="card-text"></p>\n' +
          '                        <div class="card-footer">\n' +
          '                            <div class="col-sm-6 p-0 pull-left">\n' +
          '                                    <span class="avatar"></span>\n' +
          '                                <span class="official"></span>\n' +
          '                            </div>\n' +
          '                            <div class="col-sm-6 p-0 pull-left text-right">\n' +
          '                                <span class="link-site"> <i class="fa fa-external-link" aria-hidden="true"></i></span>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '                    <div class="lh-quote-footer-button">\n' +
          '                        <button class="js-editCustomQuoteContentBtn btn btn-default btn-edit-quote">Sửa nội dung quote</button>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="card lh-quote-card lh-quote-card-5" data-template="5" style="display: none;">\n' +
          '                        <div class="card-body">\n' +
          '                            <h5 class="lh-quote-card-icon">\n' +
          '                                <span class="lh-quote-card-bg"></span>\n' +
          '                            </h5>\n' +
          '                            <p class="card-text"></p>\n' +
          '                            <div class="card-footer">\n' +
          '                                <div class="col-sm-6 p-0 pull-left">\n' +
          '                                        <span class="avatar"></span>\n' +
          '                                    <span class="official"></span>\n' +
          '                                </div>\n' +
          '                                <div class="col-sm-6 p-0 pull-left text-right">\n' +
          '                                    <span class="link-site"> <i class="fa fa-external-link" aria-hidden="true"></i></span>\n' +
          '                                </div>\n' +
          '                            </div>\n' +
          '                        </div>\n' +
          '                        <div class="lh-quote-footer-button">\n' +
          '                            <button class="js-editCustomQuoteContentBtn btn btn-default btn-edit-quote">Sửa nội dung quote</button>\n' +
          '                        </div>\n' +
          '                    </div>\n' +
          '            </div>\n'+
          '            <div class="imageSubmitBox lh-button-complete" style="display: none;">\n' +
          '                <button class="js-editorInsertcustomQuote new-btn new-btn__width-icon new-btn__width-icon--blue">Hoàn tất</button>\n' +
          '            </div>\n';

      this._sidebarBlock = '<h4 class="sidebar-title">Chọn kiểu hiển thị‹</h4>\n' +
          '        <div class="lh-editorSidebar-list">\n' +
          '            <div class="item">\n' +
          '                <div class="lh-editorSidebar-checkbox">\n' +
          '                    <div class="round">\n' +
          '                        <input type="checkbox" id="checkbox1" class="editorSelectTemplateCheckbox" value="1" checked="checked">\n' +
          '                        <label for="checkbox1"></label>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="lh-editorSidebar-content lh-quote-content type-1">\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="item">\n' +
          '                <div class="lh-editorSidebar-checkbox">\n' +
          '                    <div class="round">\n' +
          '                        <input type="checkbox" id="checkbox2" class="editorSelectTemplateCheckbox" value="2">\n' +
          '                        <label for="checkbox2"></label>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="lh-editorSidebar-content lh-quote-content type-2">\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="item">\n' +
          '                <div class="lh-editorSidebar-checkbox">\n' +
          '                    <div class="round">\n' +
          '                        <input type="checkbox" id="checkbox3" class="editorSelectTemplateCheckbox" value="3">\n' +
          '                        <label for="checkbox3"></label>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="lh-editorSidebar-content lh-quote-content type-3">\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="item">\n' +
          '                <div class="lh-editorSidebar-checkbox">\n' +
          '                    <div class="round">\n' +
          '                        <input type="checkbox" id="checkbox4" class="editorSelectTemplateCheckbox" value="4">\n' +
          '                        <label for="checkbox4"></label>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="lh-editorSidebar-content lh-quote-content type-4">\n' +
          '                </div>\n' +
          '            </div>\n' +
          '            <div class="item">\n' +
          '                <div class="lh-editorSidebar-checkbox">\n' +
          '                    <div class="round">\n' +
          '                        <input type="checkbox" id="checkbox5" class="editorSelectTemplateCheckbox" value="5">\n' +
          '                        <label for="checkbox5"></label>\n' +
          '                    </div>\n' +
          '                </div>\n' +
          '                <div class="lh-editorSidebar-content lh-quote-content type-5">\n' +
          '                </div>\n' +
          '            </div>\n' +
          '        </div>';
      this._wrap = null;
      this._contentContainer = null;
      this._inputForm = null;
      this._selectTemplates = null;
      this.contentWrap = null;
      this.textarea = null;
      this._closePopup = null;

      this._setup = function (main, sidebar) {
          var win = null, self = this;

          win = $.mediumEditorTemplates({
              destroy_hook: function () {
                  //Remove html
              },
              title: '',
              popupOverlayBg: true,
              content: main,
              sidebar: sidebar
          });


          self._wrap = $('.lh-editor-wrap');
          self._contentContainer = self._wrap.find('.content-container');
          self._inputForm = self._wrap.find('#lhCustomQuote');
          self._selectTemplates = self._wrap.find('#selectTemplatesForm');
          self.contentWrap = $('#mediaPostContent');
          self._initAction();

      };

      this._replaceBrN = function (content, rev) {
          var regex = /<br\s*[\/]?>/gi;
          if(rev) {
              content = content.replace(regex, "\n");
          } else {
              regex = /(?:\r\n|\r|\n)/g;
              content = content.replace(regex, '<br>');
          }
          return content;
      };

      this._getHtml = function () {
          var self = this;
          var _html = self._selectTemplates.find('.lh-quote-card[data-active="true"]')[0].outerHTML;
          return '<div class="medium-insert-customQuote" contenteditable="false"><div class="customQuoteContent">'+_html+'</div></div>';
      };

      this._setupUploader = function(selector) {
          _el.data('plugin_mediumInsertImages').add({
              dataType: "json",
              add: function(e, t) {
                  t.submit();
              },
              progress: function(e, t) {
                  //console.log('process');
              },
              progressall: function(e, t) {
                  //console.log('progressall');
              },
              done: function(e, t) {
                  var imageUrl = t.result.files[0].url,
                      imageId = t.result.files[0].media_id,
                      _img_class = (t.result.files[0].height < t.result.files[0].width)?'scaleByHeight':'scaleByWidth',
                      img = $('<img/>').attr({'src': imageUrl,'data-source':'lh-user-media', 'data-lh-media-id': imageId, 'data-w': t.result.files[0].width, 'data-h': t.result.files[0].height}).addClass(_img_class);
                  var uploadBox = selector.closest('.iconBrandInsert');
                  uploadBox.find('.brandIcon').html(img);
                  selector.text('Edit');

              }
          });
      };

      this._resetScroll = function () {
          $('body').removeClass('disabled-scroll');
      };

      this._disabledScroll = function () {
          $('body').addClass('disabled-scroll');
      };

      this._initAction = function () {
          var self = this;
          self.textarea = self._wrap.find('textarea');
          self.textarea.on('keyup', function(){
              var _el = $(this);
              setTimeout(function(){
                  _el.css({'height':_el[0].scrollHeight + 'px'});
              },0);
          });
          self._closePopup = self._wrap.find('.editorClosePopup').click(function () {
              $('.lh-editor-wrap *').unbind();
              $('.addAnImage button').unbind();
              $('.lh-editor-wrap').remove();
              self._resetScroll();
          });

          self._wrap.find("#iconBrandUpload").on('click', function(){
              self._setupUploader($(this));
          });

          self._wrap.find('.js-editorCustomQuoteSelectTemplate').on('click', function () {
              var _content = self.textarea.val(),
                  _brandName = $("#brandName").val(),
                  _linkAttach = $("#linkAttach").val(),
                  _brandImage = $('.brandIcon').html();

              if(!_content) {
                  alert('Bạn chưa nhập nội dung quote');
                  return;
              }
              if($(_brandImage).find('img').length > 0) {
                  if(!_brandName) {
                      alert('Vui lòng nhập tên thương hiệu, tác giả');
                      return;
                  }
              }
              /* fill content */
              self._selectTemplates.find('.card-text').html(_content);
              if(_brandName) {
                  self._selectTemplates.find('.official').html(_brandName);
              }
              if(_linkAttach) {
                  self._selectTemplates.find('.link-site').html('<a href="'+_linkAttach+'">'+_linkAttach+'</a> <i class="fa fa-external-link" aria-hidden="true"></i>');
              }

                  self._selectTemplates.find('.avatar').html(_brandImage);

              /* Start animation */
              self._wrap.find('.lh-button-complete').show();
              self._wrap.find('.sidebar-container').css({'right':'0px'});
              self._contentContainer.addClass('sidebar-active').removeClass('overlay-bg');
              self._inputForm.hide();
              self._selectTemplates.show();
          });

          self._wrap.find('.js-editCustomQuoteContentBtn').on('click', function () {
              self._wrap.find('.lh-button-complete').hide();
              self._wrap.find('.sidebar-container').css({'right':'-333px'});
              self._contentContainer.removeClass('sidebar-active').addClass('overlay-bg');
              self._inputForm.show();
              self._selectTemplates.hide();
          });

          self._wrap.find(".editorSelectTemplateCheckbox").on('change',function() {
              if(this.checked) {
                  var id = $(this).val();
                  $('.editorSelectTemplateCheckbox').prop('checked', false);
                  $(this).prop('checked', true);
                  $('.lh-quote-card').removeClass('templateSelected').removeAttr('data-active').hide();
                  $('.lh-quote-card-' + id).addClass('templateSelected').attr('data-active', 'true').show();
              }
          });

          self._wrap.find('.js-editorInsertcustomQuote').on('click', function () {
              if (self.edit == true) {
                  $(self.selectedElement).html(html = self._getHtml());
              } else {
                  $('.medium-insert-active').before(self._getHtml());
              }

              self._closePopup.trigger('click');
          });

          if(self.edit == true) {
              self._wrap.find(".imageSubmitBox button").text('Update');
              self.textarea.css({'height':self.textarea[0].scrollHeight + 'px'});
              self._listenerUploaderHasFile(true);
              self._wrap.find('#customQuoteEditorUpload').addClass('hasImage');
          }
      };

      this._setup(self._mainBlock, self._sidebarBlock);

      /**
       * hide button insert
       */
      try {
          this.$el.data('plugin_mediumInsert').hideButtons()
      } catch (e) {
      }
  };


  /** Addon initialization */

  $.fn[pluginName + addonName] = function (options) {
      return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName + addonName)) {
              $.data(this, 'plugin_' + pluginName + addonName, instance = new CustomAddon(this, options));
          }
      });
  };
})(jQuery, window, document);
