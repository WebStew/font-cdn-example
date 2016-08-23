
'use strict';

var filesystem  = require ( '../extensions/filesystem'  ) ,
    paths       = require ( '../config/paths'           ) ,

    /**
     * Gets the name of all the fonts available within the Wiley Font Library.
     *
     * @method  getNames
     * @private
     * @return  {Array} An array of font names.
     */
    getNames    = function () {

        var fonts       = filesystem.getDirectories ( paths.fonts.root  )   ,
            names       = []                                                        ,
            i                                                                       ;

        for ( i = 0; i < fonts.length; i ++ ) {

            names.push ( fonts[ i ]);
        }

        return names;

    };

/**
 * Fonts model..
 *
 * @class Font
 * @constructor
 */
module.exports = function () {

    return {
        names : getNames ()
    };
};
