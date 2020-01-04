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