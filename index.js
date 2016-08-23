
'use strict';

var express = require ( 'express'   )   ,
    kraken  = require ( 'kraken-js' )   ,
    options                             ,
    app                                 ;

// Set up Dust helpers
require ( './extensions/dust-helpers/strings' );

// Create and configure application. Also exports application instance for use by tests.
// See https://github.com/krakenjs/kraken-js#options for additional configuration options.
options = {

    onconfig : function ( config , next ) {

        // Add any additional config setup or overrides here. `config` is an initialized
        // Confit ( https://github.com/krakenjs/confit/ ) configuration object.
        next ( null , config );
    }

};

app = module.exports = express ();

app.use ( kraken ( options ));

// Ensure the font folder is available cross domain
app.use ( function ( request , response , next ) {

    response.header ( 'Access-Control-Allow-Origin'   , '*'                                                 );
    response.header ( 'Access-Control-Allow-Headers'  , 'Origin, X-Requested-With, Content-Type, Accept'    );
    next ();

});

app.on ( 'start' , function () {

    console.log ( 'Application ready to serve requests.'                );
    console.log ( 'Environment: %s' , app.kraken.get ( 'env:env'        ));

});
