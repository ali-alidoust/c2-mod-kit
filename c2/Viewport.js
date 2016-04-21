'use strict';

require('./c2.ffi.js');

global.Viewport = function(address) {
    this.selfPointer = address;
}

global.Viewport.prototype = {
    selfPointer: NULL,
    
    /**
     * Enables debug render options
     * @param {Number} - debugRenderOptionId - one of DebugRenderOptionEnum values
     * @param {Number} - unknown
     */
    enableDebugRenderOption: function(debugRenderOptionId, unknown) {
        return c2.ffi.viewport_enableDebugRenderOption(this.selfPointer , debugRenderOptionId, unknown);
    },
    /**
     * Disables debug render options
     * @param {Number} - debugRenderOptionId - one of DebugRenderOptionEnum values
     */
    disableDebugRenderOption: function(debugRenderOptionId) {
        return c2.ffi.viewport_disableDebugRenderOption(this.selfPointer, debugRenderOptionId);
    }
};