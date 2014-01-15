//code copied and modified from https://github.com/RactiveJS/Ractive-events-tap/blob/18aec5fae805f3e160f19408b7866fd459b6cd0c/Ractive-events-tap.js

(function ( global, factory ) {

  'use strict';

  // Common JS (i.e. browserify) environment
  if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
    factory( require( 'Ractive' ) );
  }

  // AMD?
  else if ( typeof define === 'function' && define.amd ) {
    define([ 'Ractive' ], factory );
  }

  // browser global
  else if ( global.Ractive ) {
    factory( global.Ractive );
  }

  else {
    throw new Error( 'Could not find Ractive! It must be loaded before the long-tap plugin' );
  }

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

  'use strict';

  var longtap = function ( node, fire ) {

  

    return {
      teardown: function () {}
    };
  };

  Ractive.events.longtap = longtap;

}));

