/** insert hr **/
;(function($, window, document, undefined) {
  'use strict';

  /** Default values */
  var pluginName = 'mediumInsert',
      addonName = 'Hr', // first char is uppercase
      defaults = {
          label: '<svg class="svg-icon-addon-hr" width="25" height="15">\n' +
              '                                    <g fill-rule="evenodd">\n' +
              '                                        <path d="M8.45 12H5.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.247 0 .45-.226.45-.5 0-.276-.203-.5-.45-.5H8.45z"></path>\n' +
              '                                        <path d="M17.45 12H14.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.248 0 .45-.226.45-.5 0-.276-.202-.5-.45-.5h-2.25z"></path>\n' +
              '                                    </g>\n' +
              '                                </svg>'
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

  /**
   * Event listeners
   *
   * @return {void}
   */

  CustomAddon.prototype.events = function () {

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

  CustomAddon.prototype.add = function (e) {
      var sel, range, html = '<hr /><p class="medium-insert-active"><br/></p>',
          options = {
              forcePlainText: true,
              cleanPastedHTML: true,
          };
      var hr = $('<hr/>'),
          p  = $('<p/>').addClass('medium-insert-active').html('<br/>');
      editor.pasteHTML(hr[0].outerHTML + p[0].outerHTML, options);

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

/** insert block **/
(function($, window, document, undefined) {
  'use strict';

  /** Default values */
  var pluginName = 'mediumInsert',
      addonName = 'Block', // first char is uppercase
      defaults = {
          label: '<i class="fa fa-code"></i>'
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

  function addon(el, options) {
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

  addon.prototype.init = function () {
      this.events();
  };

  /**
   * Event listeners
   *
   * @return {void}
   */

  addon.prototype.events = function () {

  };

  /**
   * Get the Core object
   *
   * @return {object} Core object
   */
  addon.prototype.getCore = function () {
      return this.core;
  };

  /**
   * Add custom content
   *
   * This function is called when user click on the addon's icon
   *
   * @return {void}
   */

  addon.prototype.add = function () {
      var cursor = $('.medium-insert-active'),
          html = '<p class="medium-insert-active"><br/></p>',
          options = {
              forcePlainText: false,
              cleanPastedHTML: false,
              cleanAttrs: []
          };
      $(cursor).removeClass('medium-insert-active')
      $(cursor).after(html);
      editor.checkContentChanged();
      editor.startSelectionUpdates();

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
              $.data(this, 'plugin_' + pluginName + addonName, new addon(this, options));
          }
      });
  };
})(jQuery, window, document);
