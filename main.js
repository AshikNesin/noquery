// NoQuery 0.0.1
// Author: Ashik Nesin

// AMD with global, Node, or global
;(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.NQ = factory());
        });
    } else if(typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.NQ = factory();
    }
} (this, function() {
	// Baseline
    /* -------------------------------------------------------------------------- */

    var root = this || global;
    // define 'NQ' object and current version
    var NQ = {};
    NQ.VERSION = '0.0.1';

	// Elements
    /* -------------------------------------------------------------------------- */

    NQ.isExists = function(selector,callback){
      return (document.querySelector(selector))? ((typeof callback ==="function")?callback():true) : false;
    }

    return NQ;

}));



