'use strict';

var _game_prototype = {
	selfPointer: NULL,
    toggleDebugOverlay: function(debugOverlayId) {
		return c2.ffi._game_toggleDebugOverlay(this.selfPointer, debugOverlayId);
	},
	getCurrentViewport: function() {
		return new Viewport(c2.ffi._game_getCurrentViewportPointer(this.selfPointer));
	}
};

var _viewport_prototype = {
	selfPointer: NULL,
	enableDebugRenderOption: function(debugRenderOptionId, unknown) {
		return c2.ffi._viewport_enableDebugRenderOption(this.selfPointer , debugRenderOptionId, unknown);
	},
	disableDebugRenderOption: function(debugRenderOptionId) {
		return c2.ffi._viewport_disableDebugRenderOption(this.selfPointer, debugRenderOptionId);
	}
};

function Game(address) {
	this.selfPointer = address;
}

function Viewport(address) {
	this.selfPointer = address;
};

Game.prototype = _game_prototype;
Viewport.prototype = _viewport_prototype;

var c2 = {
	getCurrentGame: function() {
		return new Game(c2.ffi._game_getCurrentGamePointer());
	}
};

c2.ffi = {
	_game_getCurrentGamePointer: 			function() { return Memory.readPointer(ptr('0x00B5A650')); },
	_game_getCurrentViewportPointer:		new NativeFunction(ptr('0x008ED2C0'), 'pointer', ['pointer'], 'thiscall'),
    _game_toggleDebugOverlay: 				new NativeFunction(ptr('0x0051CF20'), 'int', ['pointer', 'int'], 'thiscall'),
	_game_showDebugOverlay: 				new NativeFunction(ptr('0x0051CC10'), 'int', ['pointer', 'int', 'int'], 'thiscall'),
	_game_hideDebugOverlay:					new NativeFunction(ptr('0x0051CD30'), 'int', ['pointer', 'int'], 'thiscall'),
	_viewport_enableDebugRenderOption: 		new NativeFunction(ptr('0x00523550'), 'int', ['pointer', 'int', 'int'], 'thiscall'),
	_viewport_disableDebugRenderOption:		new NativeFunction(ptr('0x005235B0'), 'int', ['pointer', 'int'], 'thiscall')
};