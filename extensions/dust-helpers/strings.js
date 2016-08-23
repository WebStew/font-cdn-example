
( function ( dust ) {

    'use strict';

    /**
     * Sets a strings first letter to uppercase.
     *
     * @method upperCaseFirst
     * @public
     * @chainable
     * @example
     *      {@upperCaseFirst string="{string}"/}
     */
    dust.helpers.upperCaseFirst = function () {

        var chunk   = arguments[ 0 ]                                                        ,
            param   = dust.helpers.tap ( arguments[ 3 ].string , chunk , arguments[ 1 ])    ,
            string  = param.charAt ( 0 ).toUpperCase () + param.slice ( 1 )                 ;

        string      = string.replace ( /-/g , ' ' );

        return chunk.write ( string );

    };

}) ( typeof exports !== 'undefined' ? module.exports = require ( 'dustjs-helpers' ) : dust );
