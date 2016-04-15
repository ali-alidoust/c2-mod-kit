'use strict';

///// Classes ///////////////

var _game_prototype = {
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
    }
};

var _viewport_prototype = {
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

var _config_prototype = {
    selfPointer: NULL,
    /**
     * Gets the value of MENSAJE_MOMENTANEO variable
     */
    getIsMomentaryMessageVisible:   new NativeGetter('0xB0', 'uint8'),
    /**
     * Sets the value of MENSAJE_MOMENTANEO variable
     */
    setIsMomentaryMessageVisible:   new NativeSetter('0xB0', 'uint8'),
    /**
     * Gets the value of FRAMEADO_ADAPTATIVO variable
     */
    getIsAdaptiveFrameRate:         new NativeGetter('0x6B', 'uint8'),
    /**
     * Sets the value of FRAMEADO_ADAPTATIVO variable
     */
    setIsAdaptiveFrameRate:         new NativeGetter('0x6B', 'uint8'),
}

var _actor_prototype = {
    getActorName:   new NativeGetter('0x10', 'string'),
    setActorName:   new NativeSetter('0x10', 'string')
}

function Actor(address) {
    this.selfPointer = address;
}

function Game(address) {
    this.selfPointer = address;
}

function Viewport(address) {
    this.selfPointer = address;
};

function Config(address) {
    this.selfPointer = address;
};

Game.prototype = _game_prototype;
Viewport.prototype = _viewport_prototype;
Config.prototype = _config_prototype;
Actor.prototype = _actor_prototype;

///// Enums /////////////////

var DebugOverlayEnum = Object.freeze({
    FPS_INFO:           0,
    CURSOR_INFO:        1,
    MEMORY_INFO:        2,
    SOUND_INFO:         4,
    KEY_BINDING_LIST:   7,
    JOYSTICK_INFO:      9,
    DIFFICULTY_INFO:    12,
    PAINTING_INFO:      15, 
});

var DebugRenderOptionEnum = Object.freeze({
    SECTORS_SOLID:              0x2,
    SECTORS_TRANSPARENT:        0x3,
    OCCLUSION_SECTORS:          0x4,
    SECTOR_ZONES:               0x6,
    SECTOR_ZONES_3D:            0x7,
    OCCLUSIONS:                 0xF,
    OBSTACLES:                  0x10,
    COORDINATES:                0x25,
    PHYSICS:                    0x1C,
    OBJECT_NAMES:               0x16,
    SOUND_TRIGGERS:             0x17,
    PHYSICAL_SOUNDS:            0x18,
    PATHS:                      0x19,
    PATHFINDER_CACHE:           0x37,
    HASH_GRID:                  0x1F,
    EXPLOSION_TRIGGERS:         0x20,
    // TODO: There are more
});

///// Main Object ///////////

var c2 = {
    getCurrentGame: function() {
        return new Game(c2.ffi.game_getCurrentGamePointer());
    },
    getConfig: function() {
        return new Config(c2.ffi.global_getConfigPointer())
    },
    getActorList: function() {
        var actors = []; 
        
        function Container(address) {
            if (address.isNull || (address === undefined)) {
                address = Memory.alloc(0x14);
            }
            this.selfPointer = address;
        }
        
        /**
         * Object sent to sub_4DE1F0 to get list of the items
         */
        Container.prototype = {
            selfPointer:        NULL,
            getProp000:         new NativeGetter('0x00', 'uint8'),
            setProp000:         new NativeSetter('0x00', 'uint8'),
            getProp002:         new NativeGetter('0x02', 'uint8'),
            setProp002:         new NativeSetter('0x02', 'uint8'),
            getProp003:         new NativeGetter('0x03', 'uint8'),
            setProp003:         new NativeSetter('0x03', 'uint8'),
            getProp004:         new NativeGetter('0x04', 'uint8'),
            setProp004:         new NativeSetter('0x04', 'uint8'),
            getIsEmpty:         new NativeGetter('0x09', 'uint8'),
            setIsEmpty:         new NativeSetter('0x09', 'uint8'),
            getFirstPointer:    new NativeGetter('0x10', 'pointer'),
            setFirstPointer:    new NativeSetter('0x10', 'pointer'),
            getLastPointer:     new NativeGetter('0x0C', 'pointer'),
            setLastPointer:     new NativeSetter('0x0C', 'pointer'),
        }
        
        function LinkedListItem(address) {
            this.selfPointer = address;
            if (!address.isNull()) {
                this.nextPointer = Memory.readPointer(address.add(0x04));
                this.actorPointer = Memory.readPointer(address.add(0x08));
            }
        }
        
        var container = new Container(NULL);
        c2.ffi.initializeActorLinkedListContainer(container.selfPointer);
        
        var param = c2.ffi.getParameterForGetActorList();
        c2.ffi.getActorList(container.selfPointer, param, 1);
        
        if (!container.getIsEmpty()) {
            var currentItem = new LinkedListItem(container.getFirstPointer());
            while (!currentItem.selfPointer.equals(container.getLastPointer())) {
                var actor = new Actor(currentItem.actorPointer);
                actors.push(actor);
                currentItem = new LinkedListItem(currentItem.nextPointer);
            }
        }
        
        return actors;
    }
};

///// FFI ///////////////////

c2.ffi = {
    global_getCurrentGamePointer:       function() { return Memory.readPointer(ptr('0x00B5A650')); },
    global_getConfigPointer:            function() { return Memory.readPointer(ptr('0x00B58490')); },
    global_getScene:                    function() { return Memory.readPointer(ptr('0x00B58488')); },
    global_getUnknown_00B64A28:         function() { return Memory.readPointer(ptr('0x00B64A28')); },
    game_getCurrentViewportPointer:     new NativeFunction(ptr('0x008ED2C0'), 'pointer', ['pointer'], 'thiscall'),
    game_toggleDebugOverlay:            new NativeFunction(ptr('0x0051CF20'), 'int', ['pointer', 'int'], 'thiscall'),
    game_showDebugOverlay:              new NativeFunction(ptr('0x0051CC10'), 'int', ['pointer', 'int', 'int'], 'thiscall'),
    game_hideDebugOverlay:              new NativeFunction(ptr('0x0051CD30'), 'int', ['pointer', 'int'], 'thiscall'),
    viewport_enableDebugRenderOption:   new NativeFunction(ptr('0x00523550'), 'int', ['pointer', 'int', 'int'], 'thiscall'),
    viewport_disableDebugRenderOption:  new NativeFunction(ptr('0x005235B0'), 'int', ['pointer', 'int'], 'thiscall'),
    openListaEntesWindow:               new NativeFunction(ptr('0x008ED9D0'), 'int', ['pointer'], 'thiscall'),
    openListaBichosWindow:              new NativeFunction(ptr('0x008ED7A0'), 'int', ['pointer'], 'thiscall'),
    openListaMisionesWindow:            new NativeFunction(ptr('0x008ED830'), 'int', ['pointer'], 'thiscall'),
    openListaRollingWindow:             new NativeFunction(ptr('0x008ED8C0'), 'int', ['pointer'], 'thiscall'),
    openVariablesGeneralesWindow:       new NativeFunction(ptr('0x008ED950'), 'int', ['pointer'], 'thiscall'),
    openDeveloperWindow:                new NativeFunction(ptr('0x0060F200'), 'int', ['pointer'], 'thiscall'),
    getActorList:                       new NativeFunction(ptr('0x004DE1F0'), 'int', ['pointer', 'pointer', 'int'], 'thiscall'),
    initializeActorLinkedListContainer: new NativeFunction(ptr('0x00472820'), 'int', ['pointer'], 'thiscall'),
    // TODO: this function should be replaced with an object reference  
    getParameterForGetActorList:        new NativeFunction(ptr('0x004EDFF0'), 'pointer', [], 'thiscall')
};

///// Utils /////////////////

function NativeGetter(offset, type) {
    var readers = {
        'pointer':  Memory.readPointer,
        'int8':     Memory.readS8,
        'uint8':    Memory.readU8,
        'int16':    Memory.readS16,
        'uint16':   Memory.readU16,
        'int32':    Memory.readS32,
        'uint32':   Memory.readU32,
        'int64':    Memory.readS64,
        'uint64':   Memory.readU64,
        'float':    Memory.readFloat,
        'double':   Memory.readDouble,
        'string':   Memory.readCString, // Reads string from pointer
    }
    
    if (!(type in readers)) {
        throw 'No getter exists for type:' + type;
    }
    
    var getter = readers[type];
    
    return function() {
        return getter(this.selfPointer.add(offset));
    }
}

function NativeSetter(offset, type) {
    var writers = {
        'pointer':  Memory.writePointer,
        'int8':     Memory.writeS8,
        'uint8':    Memory.writeU8,
        'int16':    Memory.writeS16,
        'uint16':   Memory.writeU16,
        'int32':    Memory.writeS32,
        'uint32':   Memory.writeU32,
        'int64':    Memory.writeS64,
        'uint64':   Memory.writeU64,
        'float':    Memory.writeFloat,
        'double':   Memory.writeDouble,
        'string':   Memory.writeCString, // Reads string from pointer
    }
    
    if (!(type in writers)) {
        throw 'No setter exists for type:' + type;
    }
    
    var setter = writers[type];
    
    return function(value) {
        return setter(this.selfPointer.add(offset), value);
    }
}

///// Hooks /////////////////
// Interceptor.attach(ptr('0x005189A0'), {
//     onEnter: function(args) {
//     }
// });
// Interceptor.attach(ptr('0x00574150'), {
//     onEnter: function(args) {
//     }
// });