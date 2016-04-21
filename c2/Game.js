'use strict';

require('./c2.ffi.js');
require('./Viewport.js');
require('./ObjGameOFfset640.js');

global.Game = function(address) {
    this.selfPointer = address;
}

global.Game.prototype = {
    selfPointer: NULL,
    
    /**
     * Turns on/off the debug overlays
     * @param {Number} debugOverlayId - one of DebugOverlayEnum values
     */
    toggleDebugOverlay: function(debugOverlayId) {
        return c2.ffi.game_toggleDebugOverlay(this.selfPointer, debugOverlayId);
    },
    getCurrentViewport: function() {
        return new Viewport(c2.ffi.game_getCurrentViewportPointer(this.selfPointer));
    },
    getObjGameOffset640: function() {
        return new ObjGameOffset640(Memory.readPointer(this.selfPointer.add(0x640)));
    }
};