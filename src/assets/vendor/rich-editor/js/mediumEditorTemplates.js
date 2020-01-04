(function($) {
    function LH_Editor_Templates(options) {
        this.render = function() {
            var self = this;

            this.win = $('<div />').addClass('lh-editor-wrap');
            $(document.body).append(this.win);

            this.title_bar = $('<div />').addClass('editor-header');
            this.win.append(this.title_bar);

            if(!options.skipCloseBtn) {
                this.close_btn = $('<span />').addClass('close-btn').append($('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<g opacity="0.5">\n' +
                    '<g filter="url(#filter0_d)">\n' +
                    '<circle cx="20" cy="18" r="18" fill="black"/>\n' +
                    '<circle cx="20" cy="18" r="17.25" stroke="white" stroke-width="1.5"/>\n' +
                    '</g>\n' +
                    '<path d="M26.7498 11.25L13.25 24.7498" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>\n' +
                    '<path d="M26.7498 24.7498L13.25 11.25" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<filter id="filter0_d" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n' +
                    '<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
                    '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n' +
                    '<feOffset dy="2"/>\n' +
                    '<feGaussianBlur stdDeviation="1"/>\n' +
                    '<feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.15 0"/>\n' +
                    '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n' +
                    '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n' +
                    '</filter>\n' +
                    '</defs>\n' +
                    '</svg>\n')).click(function(e){ self.destroy(e); });
                this.backBtn = $('<span />').addClass('back-btn').append($('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '<path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg> Back \n')).click(function (e) {self.destroy(e);});

                this.title_bar.append(this.backBtn);
            } else {

            }

            this.title_container = $('<h2 />').addClass('heading');

            this.title_bar.append(this.title_container);
            if(this.title) {
                this.title_container.html(this.title);
            }

            this.scene = $('<div />').addClass('editor-scene');
            this.contentContainer = $('<div />').addClass('content-container').appendTo(this.scene);
            if(this.popupOverlayBg) this.contentContainer.addClass('overlay-bg');
            if(this.content) {
                this.contentContainer.html(this.content);
            }
            this.win.append(this.scene);

            this.sidebarContainer = $('<div />').addClass('sidebar-container').appendTo(this.win);
            if(this.sidebar) {
                this.sidebarContainer.html(this.sidebar);
            }

            self._disabledScroll();

        };

        this._resetScroll = function () {
            $('body').removeClass('disabled-scroll');
        };

        this._disabledScroll = function () {
            $('body').addClass('disabled-scroll');
        };

        this.destroy = function(e, force) {
            var self = this;
            if(! force) {
                if(typeof this.destroy_hook === 'function') {
                    if(this.destroy_hook(e) === false) {
                        return false;
                    }
                }
            }

            var buff = [];
            var inst = null;

            for(var x = 0; x < $.lh_editor_template.length; x ++) {
                if(x !== this.index) {
                    inst = $.lh_editor_template[x];
                    inst.index = buff.length;
                    buff.push(inst);
                }
            }

            $.lh_editor_template = buff;

            this.win.remove();
            self._resetScroll();
        };

        if(typeof options !== 'object') {
            options = {};
        }

        options.index = $.lh_editor_template.length;

        this.index = null;
        this.destroy_hook = null;
        this.title = null;
        this.title_bar = null;
        this.close_btn = null;
        this.title_container = null;
        this.content = null;
        this.sidebar = null;
        this.win = null;
        this.scene = null;
        this.skipCloseBtn = null;
        this.backBtn = null;
        this.popupOverlayBg = null;

        $.extend(this, options);

        this.render();
    }

    $.lh_editor_template = [];

    $.mediumEditorTemplates = function(options) {
        var inst = new LH_Editor_Templates(options);
        $.lh_editor_template.push(inst);

        return inst;
    };
})(jQuery);
