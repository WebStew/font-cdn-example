
'use strict';

var application = require ( './index'   )   ,
    http        = require ( 'http'      )   ,
    server                                  ;

// Create and start HTTP server.
server = http.createServer ( application )  ;

server.listen   ( process.env.PORT || 8000 );
server.on       ( 'listening' , function () {
    console.log ( 'Server listening on http://localhost:%d' , this.address ().port );
});
