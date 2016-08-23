
'use strict';

requirejs.config ({
    paths       : {
        jquery  : '../components/jquery/dist/jquery'
    }
});

/**
 * FONT application namespace.
 * Responsible for bootstrap the application and intialising the modules.
 *
 * @module      FONT
 * @requires    forms/font-options
 * @see         module:FONT
 */
require ([
    'forms/font-options'
] ,

function ( fonts ) {

    /**
     * Export for the font options module
     * @exports FONT
     */
    var FONT = {

        /**
         * Setups up any modules that should be running on the page.
         *
         * @method      setup
         * @public
         */
        setup : function () {
            fonts.setup ();
        }
    };

    FONT.setup ();

});
