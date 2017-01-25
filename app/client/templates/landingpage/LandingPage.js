Template.LandingPage.rendered = function () {

        this.$("#ice-but").click(function () {
            $('.ui.basic.modal')
                .modal('show')
            ;
        });
        this.$("#close-ice").click(function () {
            $('.ui.basic.modal')
                .modal('hide')
            ;
        });
        this.$('.menu .item')
            .tab()
        ;

        // fix menu when passed
        $('.masthead')
            .visibility({
              once: false,
              onBottomPassed: function() {
                $('.fixed.menu.landing').transition('fade in');
              },
              onBottomPassedReverse: function() {
                $('.fixed.menu.landing').transition('fade out');
              }
            })
        ;

        /* create sidebar and attach to menu open
        $('.ui.sidebar.landing')
            .sidebar('attach events', '.toc.item')
        ; */
};
