
'use strict';

module.exports = function () {

    return function ( request , response , next ) {

        var locale = request.cookies && request.cookies.locale;

        // Set the locality for this response. The template will pick the appropriate bundle
        response.locals.context = {
            locality : locale
        };

        next ();

    };
};
