require( 'shelljs/global' );

var path = require('path');
var jade = require('jade');

var pages = [ 'index', 'background', 'research', 'publications', 'misc' ];

var src, dest, locals;

cd( __dirname );

pages.forEach( function( page ) {

  src = '_jade/' + page + '.jade', dest = page + '.html';
  locals = { 'navClass': {} };

  locals.navClass[ page ] = 'active';

  jade.compile( cat( src ), {
    filename: src
  })( locals ).to( dest );

} );
