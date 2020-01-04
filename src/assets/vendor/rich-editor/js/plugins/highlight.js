const removeHighlightButton = "<div class='medium-insert-highlight-toolbar2 medium-editor-toolbar medium-editor-toolbar-active'>\
                        <ul class='medium-editor-toolbar-actions clearfix'>\
                        <li>\
                            <button class='medium-editor-action' data-action='remove'><svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>\
                        <g opacity='0.5'>\
                        <g filter='url(#filter0_d)'>\
                        <circle cx='19' cy='17' r='17' fill='black'></circle>\
                        <circle cx='19' cy='17' r='16.25' stroke='white' stroke-width='1.5'></circle>\
                        </g>\
                        <path d='M18.125 16H16.375V22H18.125V16Z' fill='white'></path>\
                        <path d='M21.625 16H19.875V22H21.625V16Z' fill='white'></path>\
                        <path d='M22.5 10C22.5 9.4 22.15 9 21.625 9H16.375C15.85 9 15.5 9.4 15.5 10V12H12V14H12.875V24C12.875 24.6 13.225 25 13.75 25H24.25C24.775 25 25.125 24.6 25.125 24V14H26V12H22.5V10ZM17.25 11H20.75V12H17.25V11ZM23.375 14V23H14.625V14H23.375Z' fill='white'></path>\
                        </g>\
                        <defs>\
                        <filter id='filter0_d' x='0' y='0' width='38' height='38' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>\
                        <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>\
                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>\
                        <feOffset dy='2'></feOffset>\
                        <feGaussianBlur stdDeviation='1'></feGaussianBlur>\
                        <feColorMatrix type='matrix' values='0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.15 0'></feColorMatrix>\
                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'></feBlend>\
                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'></feBlend>\
                        </filter>\
                        </defs>\
                        </svg>\
                        </button>\
                        </li>\
                      </ul></div>";
/** insert hr **/
;(function($, window, document, undefined) {
    'use strict';

    /** Default values */
    var pluginName = 'mediumInsert',
        addonName = 'HighLight', // first char is uppercase
        defaults = {
            label: '<svg width="16" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '                                    <path d="M15 16H1C0.4 16 0 15.6 0 15V1C0 0.4 0.4 0 1 0H15C15.6 0 16 0.4 16 1V15C16 15.6 15.6 16 15 16ZM1 15H15V1H1V15Z" fill="#333333"></path>\n' +
                '                                    <path d="M8.69107 12V5.5H11V4H5V5.5H7.31429V12H8.69107Z" fill="#333333"></path>\n' +
                '                                </svg>',
        },
        options = {
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
        }

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

        this.init();
    }

    /**
     * Initialization
     *
     * @return {void}
     */

    CustomAddon.prototype.init = function () {
        this.events();
    };

    CustomAddon.prototype.selectHighlight = function (e) {
      var t, i = this,
      t = $(e.target);
      t.addClass('lh-template-highlight-selected');
      setTimeout(function () {
        i.addToolbar()
    }, 50);
    };

    /**
     * Add toolbar
     */
    CustomAddon.prototype.addToolbar = function () {
      var o = this.core.getEditor().options.elementsContainer || "body",
      $toolbar2 = $('.medium-insert-highlight-toolbar2');
      $(o).append(removeHighlightButton);
      this.repositionToolbars();
      $toolbar2.fadeIn();
    };

    /**
     * Perform remove highlight
     */
    CustomAddon.prototype.removeHighlight = function (e) {
      var t, i;
      8 !== e.which && 46 !== e.which || (t = this.$el.find(".lh-template-highlight-selected")).length && (e.preventDefault(), $(".medium-insert-highlight-toolbar2").remove(), i = $("<p><br/></p>"), t.before(i), t.remove(), this.core.hideAddons(), this.core.moveCaret(i), this.core.triggerInput())
    }

    /**
     * Trigger action to remove highlight
     */
    CustomAddon.prototype.toolbar2Action = function(e) {
      var t = $(e.target).is("button") ? $(e.target) : $(e.target).closest("button"),
      i = (options.actions[t.data("action")] || {}).clicked;
      i && i(this.$el.find(".lh-template-highlight-selected")), this.core.triggerInput(), this.repositionToolbars()
    }

    /**
     * Reposition toolbar 2
     */

    CustomAddon.prototype.repositionToolbars = function () {
      var $toolbar2 = $('.medium-insert-highlight-toolbar2'),
          $highlight = this.$el.find('.lh-template-highlight-selected'),
          elementsContainer = this.core.getEditor().options.elementsContainer,
          elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
          elementsContainerBoundary = elementsContainerAbsolute ? elementsContainer.getBoundingClientRect() : null,
          containerWidth = $(window).width(),
          position = {};

      if ($toolbar2.length) {
        position.top = $highlight.offset().top + 5;
        position.left = $highlight.offset().left + $highlight.width(); // 4px - distance from a border
        if (elementsContainerAbsolute) {
            position.top += elementsContainer.scrollTop - elementsContainerBoundary.top;
            position.left -= elementsContainerBoundary.left;
            containerWidth = $(elementsContainer).width();
        }

        if (position.left + $toolbar2.width() > containerWidth) {
          position.left = containerWidth - $toolbar2.width();
        }

        $toolbar2.css(position);
      }
    }

    /**
    * Autoreposition toolbar
    */
   CustomAddon.prototype.autoRepositionToolbars = function () {
     console.log('123')
    setTimeout(function () {
        this.repositionToolbars(), this.repositionToolbars()
    }.bind(this), 0)
},

     /**
      * UnselectHighlight
      */
    CustomAddon.prototype.unselectHighlight = function (e) {
      var t = $(e.target).hasClass("lh-template-highlight") ? $(e.target) : $(e.target).closest(".lh-template-highlight"),
          i = this.$el.find(".lh-template-highlight-selected"),
          b = $(e.target);
      if ($(b).hasClass('medium-editor-action') || $(b).parents('button:first').hasClass('medium-editor-action')) {
          return;
      }
      if (t.hasClass("lh-template-highlight-selected")) return i.not(t).removeClass("lh-template-highlight-selected"), $(".medium-insert-highlight-toolbar2").remove();
      i.removeClass("lh-template-highlight-selected"), $(".medium-insert-highlight-toolbar2").remove();
    }
    /**
     * Event listeners
     *
     * @return {void}
     */

    CustomAddon.prototype.events = function () {
      $(document).on("click", $.proxy(this, "unselectHighlight"))
      .on("keydown", $.proxy(this, "removeHighlight"))
      .on("click", ".medium-insert-highlight-toolbar2 .medium-editor-action", $.proxy(this, "toolbar2Action")),
      this.$el.on("click", ".lh-template-highlight", $.proxy(this, "selectHighlight")),
      $(window).on('resize', $.proxy(this, 'autoRepositionToolbars'));
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

    CustomAddon.prototype.add = function () {
        var html = '<p class="lh-template-highlight"><br/></p><p><br/></p>',
            options = {
                forcePlainText: false,
                cleanPastedHTML: false,
                cleanAttrs: []
            };
        editor.pasteHTML(html, options);
        editor.checkContentChanged();

        /**
         * hide button insert
         */
        try {
            this.$el.data('plugin_mediumInsert').hideButtons()
        } catch (e) {}
    };


    /** Addon initialization */

    $.fn[pluginName + addonName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName + addonName)) {
                $.data(this, 'plugin_' + pluginName + addonName, new CustomAddon(this, options));
            }
        });
    };
})(jQuery, window, document);
