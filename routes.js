
'use strict';

var index = require ( './controllers/index' );

/**
 * Router controller. Handles all application routes.
 *
 * @method router
 * @public
 * @param {router} Function The Express.js router.
 */
module.exports = function ( router ) {

    // Application GET routes
    router.get ( '/' , index.get );

};
