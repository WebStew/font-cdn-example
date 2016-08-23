
/**
 * String utility functions
 *
 * @module      utilities/string
 * @see         module:utilities/string
 */
define ([] , function () {

    'use strict';

    /**
     * Exports the utility functions for strings.
     * @exports utilities/string
     */
    return {

        /**
         * Manipulates a string so that the first letter of each word is changed to uppercase.
         *
         * @method      setUCFirst
         * @public
         * @param       {String}  string The string to manipulate.
         * @return      {String} The manipulated string with all first letters set to uppercase.
         * @example
         *      var string = require ( 'utilities/string' );
         *      string.setUCFirst ( 'set me to uppercase first' );
         */
        setUCFirst : function ( string ) {

            return string.replace ( /\w\S*/g , function ( text ) {

                return text.charAt ( 0 ).toUpperCase () + text.substr ( 1 ).toLowerCase ();
            });
        }
    };

});
