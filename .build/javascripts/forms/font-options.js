
/**
 * Updates the pre element font family and font size depending on
 * user interaction with the font option form.
 *
 * @module      forms/font-options
 * @requires    module:jquery
 * @see         module:forms/font-options
 */
define ([
    'jquery' ,
    'utilities/string'
] ,

function ( $ , string ) {

    'use strict';

    /**
     * Object literal of jQuery elements used within the Font Options module.
     * @type {Object}
     */
    var elements = {
            family  : $ ( '#font-families'  ) ,
            head    : $ ( 'head'            ) ,
            pre     : $ ( 'pre'             ) ,
            size    : $ ( '#font-size'      )
        } ,

        /**
         * Writes a link into the head of the document to the chosen font family CSS.
         * Updates the pre element style with the new font family.
         *
         * @method setFontFamily
         * @private
         */
        setFontFamily = function () {

            var filename    = elements.family.val ()                                                ,
                family      = string.setUCFirst ( filename.replace ( /-/g , ' ' ).toLowerCase ())   ,
                stylesheet  = '/fonts/' + filename + '/' + filename + '.css'                        ,
                id          = 'font-' + filename                                                    ;

            if ( ! $ ( '#' + id ).length && family ) {

                elements.head.append ( $ ( '<link>' ).attr ({
                    href    : stylesheet    ,
                    id      : id            ,
                    rel     : 'stylesheet'
                }));
            }

            family = family || 'Arial';
            elements.pre.css ( 'font-family' , family );

        } ,

        /**
         * Updates the pre element style with the new font size.
         *
         * @method setFontSize
         * @private
         */
        setFontSize = function () {

            var value = elements.size.val () + 'px';

            if ( value ) {
                elements.pre.css ( 'font-size' , value );
            }

        };

    /**
     * Export for the font options module
     * @exports forms/font-options
     */
    return {

        /**
         * Binds the required functionality to the font options form.
         *
         * @method setup
         * @public
         */
        setup : function () {

            elements.family.on  ( 'change' , setFontFamily  );
            elements.size.on    ( 'change' , setFontSize    );

        }
    };

});
