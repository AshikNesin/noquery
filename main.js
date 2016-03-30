// NoQuery 0.0.1
// Author: Ashik Nesin

// AMD with global, Node, or global
;
( function( root, factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( function() {

            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return ( root.NQ = factory() );
        } );
    } else if ( typeof exports === "object" ) {

        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {

        // Browser globals (root is window)
        root.NQ = factory();
    }
}( this, function() {

    // Baseline
    /* -------------------------------------------------------------------------- */

    var root = this || global;

    // Define 'NQ' object and current version
    var NQ = {};
    NQ.VERSION = "0.0.1";

    // Elements
    /* -------------------------------------------------------------------------- */

    NQ.isExists = function( selector, callback ) {
        return ( document.querySelector( selector ) ) ? ( ( typeof callback === "function" ) ? callback() : true ) : false;
    };

    // Validation
    /* -------------------------------------------------------------------------- */

    NQ.isEmail = function( email ) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test( email );

    };

    // Selectors (based on https://gist.github.com/Potfur/5576225)
    /* -------------------------------------------------------------------------- */
    window.S = function( s ) {
        return document[ {
            "#": "getElementById",
            ".": "getElementsByClassName",
            "@": "getElementsByName",
            "=": "getElementsByTagName"
        }[ s[ 0 ] ] || "querySelectorAll" ]( s.slice( 1 ) );
    };

    return NQ;

} ) );
