
'use strict';

var filesystem  = require ( 'fs'     ) ,
    path        = require ( 'path'   ) ;

/**
 * Gets all directories within a source path.
 *
 * @method  get
 * @public
 * @param   {String} src The source path.
 * @return  {Array} The array of directories within the path.
 */
exports.getDirectories = function ( src ) {

    return filesystem.readdirSync ( src ).filter ( function ( file ) {

        return filesystem.statSync ( path.join ( src , file )).isDirectory ();
    });
};

/**
 * Checks to see if a files exists.
 *
 * @method  isFile
 * @public
 * @param   {String} src The souce path.
 * @return  {Boolean}
 */
exports.isFile = function ( src ) {

    var exists  ,
        file    ;

    try {

        file    = filesystem.lstatSync ( src );
        exists  = file.isFile () ? true : false;

    }

    catch ( e ) {

        exists  = false;
    }

    return exists;

};
