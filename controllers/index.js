
'use strict';

var Fonts = require ( '../models/fonts' );

/**
 * Controller for the index page. Ensuring the index page gets rendered
 * with the correct data.
 *
 * @method  get
 * @public
 * @param   {Object} request  The request Object.
 * @param   {Object} response The response Object.
 */
exports.get = function ( request , response ) {

    var fonts = new Fonts ();

    response.render ( 'index' , fonts );

};
