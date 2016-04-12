'use strict';

var _game_prototype = {
	selfPointer: NULL,
	toggleDebugOverlay: function(debugOverlayId) {
		return c3.ffi._game_toggleDebugOverlay(this.selfPointer, debugOverlayId);
	},
	getCurrentViewport: function() {
        return new Viewport(c3.ffi._game_getCurrentViewportPointer(this.selfPointer));
	}
};

var _viewport_prototype = {
	selfPointer: NULL,
	enableDebugRenderOption: function(debugRenderOptionId, unknown) {
		return c3.ffi._viewport_enableDebugRenderOption(this.selfPointer , debugRenderOptionId, unknown);
	},
	disableDebugRenderOption: function(debugRenderOptionId) {
		return c3.ffi._viewport_disableDebugRenderOption(this.selfPointer, debugRenderOptionId);
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

var c3 = {
	getCurrentGame: function() {
		return new Game(c3.ffi._game_getCurrentGamePointer());
	}
};

c3.ffi = {
	_game_getCurrentGamePointer: 			function() { return Memory.readPointer(ptr('0x00E3EF5C')); },
    _game_getCurrentViewportPointer:        function(pointer) {
        var ptr01 = Memory.readPointer(pointer.add(0x1C));
        var ptr02 = Memory.readPointer(ptr01.add(0x8)); 
		return ptr02;
    },
	_game_toggleDebugOverlay: 				new NativeFunction(ptr('0x005AB770'), 'int', ['pointer', 'int'], 'thiscall'),
	_viewport_enableDebugRenderOption: 		new NativeFunction(ptr('0x005C6AF0'), 'int', ['pointer', 'int', 'int'], 'thiscall'),
	_viewport_disableDebugRenderOption:		new NativeFunction(ptr('0x005C6B50'), 'int', ['pointer', 'int'], 'thiscall')
};