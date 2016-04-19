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
    },
    getObjGameOffset640: function() {
        return new ObjGameOffset640(Memory.readPointer(this.selfPointer.add(0x640)));
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
    
    getIsAtmosphericEffects:            new NativeGetter('0x68', 'uint8'), // EFECTOS_ATMOSFERICOS
    getIsZoomGui:                       new NativeGetter('0x69', 'uint8'), // ZOOM_GUAI
    getIs3DFaces:                       new NativeGetter('0x6A', 'uint8'), // CARAS3D
    getNivel:                           new NativeGetter('0x6C', 'int32'), // NIVEL
    getDisableAdaptiveActorPainting:    new NativeGetter('0x6A', 'uint8'), // QUITA_PINTADO_BICHOS_ADAPTATIVO
}

var _actor_prototype = {
    getActorName:   new NativeGetter('0x10', 'string'),
    setActorName:   new NativeSetter('0x10', 'string'),
}

var _global_00B584D0_prototype = {
    selfPointer:    NULL,
    insertActor:   function (macro, objGameOffset640) {
        // TODO: refactor this function
        var stringPointer = Memory.allocUtf8String(macro);
        var eax, ecx, edx, edi, esi, ebx;
        
        eax = c2.ffi.sub_00414430(this.selfPointer, stringPointer, objGameOffset640.selfPointer)
        console.log(eax.toString());
        edi = eax;
        ebx = Memory.readPointer(edi.add(0x8));
        eax = c2.ffi.sub_004113F0(this.selfPointer, 0x248);
        esi = NULL;
        if (!eax.isNull()) {
            eax = c2.ffi.sub_0058A470(eax);
            esi = eax;
        }
        
        c2.ffi.sub_0058AE90(esi, ebx, NULL);
        c2.ffi.sub_00591F10(esi);
        ecx = c2.ffi.global_getWorld();
        c2.ffi.sub_00561350(ecx, esi);
        c2.ffi.sub_00562910(ecx, esi, 0xD, 0x1);
        c2.ffi.sub_00591600(esi, 0x1);
        
        c2.ffi.sub_00414580(this.selfPointer, edi);
        
        edx = Memory.readPointer(esi);
        var f1 = new NativeFunction(Memory.readPointer(edx.add(0x4)), 'pointer', ['pointer', 'int', 'int'], 'thiscall');
        f1(esi, 0x7D, 0x0);
    }
}

var _obj_game_offset_640_prototype = {
    selfPointer:    NULL
}

function Actor(address) {
    this.selfPointer = address;
}

function Game(address) {
    this.selfPointer = address;
}

function Viewport(address) {
    this.selfPointer = address;
}

function Config(address) {
    this.selfPointer = address;
}

function Global00B584D0(address) {
    this.selfPointer = address;
} 

function ObjGameOffset640(address) {
    this.selfPointer = address;
}

Game.prototype = _game_prototype;
Viewport.prototype = _viewport_prototype;
Config.prototype = _config_prototype;
Actor.prototype = _actor_prototype;
ObjGameOffset640.prototype = _obj_game_offset_640_prototype;
Global00B584D0.prototype = _global_00B584D0_prototype;
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
        return new Game(c2.ffi.global_getCurrentGamePointer());
    },
    getConfig: function() {
        return new Config(c2.ffi.global_getConfigPointer());
    },
    getGlobal00B584D0: function() {
        return new Global00B584D0(c2.ffi.global_getUnknown_00B584D0());
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

///// Events ////////////////
c2.events = {
    onKeyboardEvent(state, key,  isShiftPressed, isCtrlPressed, isAltPressed) {
        // TODO
        // var g = c2.getCurrentGame();
        // var glob = c2.getGlobal00B584D0();
        // var obj = g.getObjGameOffset640();
        // return glob.insertActor(_test_macro, obj); 
    }
}

///// FFI ///////////////////

c2.ffi = {
    global_getCurrentGamePointer:       function() { return Memory.readPointer(ptr('0x00B5A650')); },
    global_getConfigPointer:            function() { return Memory.readPointer(ptr('0x00B58490')); },
    global_getScene:                    function() { return Memory.readPointer(ptr('0x00B58488')); },
    global_getWorld:                    function() { return Memory.readPointer(ptr('0x00B64A28')); },
    global_getUnknown_00B584D0:         function() { return Memory.readPointer(ptr('0x00B584D0')); },
    global_getCursorMapX:               function() { return Memory.readFloat(ptr('0x00B619F0')); },
    global_getCursorMapY:               function() { return Memory.readFloat(ptr('0x00B619F4')); },
    global_getCursorWorldX:             function() { return Memory.readFloat(ptr('0x00B619F8')); },
    global_getCursorWorldY:             function() { return Memory.readFloat(ptr('0x00B619FC')); },
    global_getCursorWorldZ:             function() { return Memory.readFloat(ptr('0x00B61A00')); },
    sub_0041C7A0:                       new NativeFunction(ptr('0x0041C7A0'), 'pointer', ['pointer'], 'thiscall'),
    sub_0041C860:                       new NativeFunction(ptr('0x0041C860'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall'),
    sub_00411410:                       new NativeFunction(ptr('0x00411410'), 'pointer', ['pointer', 'pointer'], 'thiscall'),
    sub_00414430:                       new NativeFunction(ptr('0x00414430'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall'),
    sub_004113F0:                       new NativeFunction(ptr('0x004113F0'), 'pointer', ['pointer', 'int'], 'thiscall'),
    sub_00414580:                       new NativeFunction(ptr('0x00414580'), 'int', ['pointer', 'pointer'], 'thiscall'),
    sub_00591F10:                       new NativeFunction(ptr('0x00591F10'), 'int', ['pointer'], 'thiscall'),
    sub_00561350:                       new NativeFunction(ptr('0x00561350'), 'int', ['pointer', 'pointer'], 'thiscall'),
    sub_00562910:                       new NativeFunction(ptr('0x00562910'), 'int', ['pointer', 'pointer', 'int', 'int'], 'thiscall'),
    sub_00591600:                       new NativeFunction(ptr('0x00591600'), 'int', ['pointer', 'int'], 'thiscall'),
    sub_0058A470:                       new NativeFunction(ptr('0x0058A470'), 'pointer', ['pointer'], 'thiscall'),
    sub_0058AE90:                       new NativeFunction(ptr('0x0058AE90'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall'),
    world_getSceneIndexByName:          new NativeFunction(ptr('0x0057F920'), 'int', ['pointer', 'pointer', 'pointer'], 'thiscall'),
    world_getSceneByIndex:              new NativeFunction(ptr('0x00573F60'), 'pointer', ['pointer', 'int'], 'thiscall'),
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

// String.format function
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

///// Hooks /////////////////

Interceptor.attach(ptr('0x008D99A0'), {
    onEnter: function(args) {
        c2.ffi.onKeyboardEvent();
    }
});

// Interceptor.attach(ptr('0x005189A0'), {
//     onEnter: function(args) {
//     }
// });
// Interceptor.attach(ptr('0x00574150'), {
//     onEnter: function(args) {
//     }
// });

var _test_macro = `
[
	.POS 
	[
		.XYZ 
		(
			{0} {1} {2} 
		)
		.ESC EXTERIOR 
	]
	.ANGULO 331.0 
	.TOKEN CABO_03 
	.BANDO ALEMAN 
	.HTIP SOLD 
	.COMPORTAMIENTO 
	(
		ComporAlemanScript
		[
			.VIGILADOR
			[
				.AMPL_NORMAL 70
				.MAX_ANG_BARRIDO 50
				.LONG_NORMAL 600

		   ]
			.EVENTOS_RUTA 
			(
				
			)
			.DISPARADOR 
			[
				.ARMA ALEMAN_FUSIL 
			]
			.NUM_GRANADAS 0 
			.ANIMACION ALEFUS.ANI 
			.GESTOR_MOVIMIENTO 
			[
			]
		]
	)
	.VISTA 
	(
		VistaTriangular 
		[
		]
	)
	.OIDO 
	(
		Oido 
		[
		]
	)
	.MOTOR 
	(
		MotorPeaton 
		[
		]
	)
	.ANIMADOR 
	(
		AnimadorHumano 
		[
			.VOL 
			(
				Cilindro 
				[
					.RADIO 20.0 
					.ALTURA 50.0 
				]
			)
			.ANIM ALEFUS.ANI 
		]
	)
	.VOLCOLISION 
	(
		Cilindro 
		[
			.RADIO 12.0 
			.ALTURA 50.0 
		]
	)
	.TIPOCOLISION PEATON 
	.ZONASELECCION 
	(
		Cilindro 
		[
			.RADIO 10.0 
			.ALTURA 50.0 
		]
	)
	.LISTAS 
	(
		CHOC SELE VISI EJEC FLAE 
	)
	.COLORPUNTOLIBRETA ALEMAN 
	.USAHAB 
	[
	]
	.PUEDE_CONDUCIR 
	(
		WILLIS ZODIAK CAMION CANON LANCHA_MOTORA NIDO_AMETRALLADORAS ASCENSOR MONTA_ALEMAN SILLA CAMA 
	)
	.MICUADRICULA 
	[
		.DIMCUADX  4.0 
		.DIMCUADY  6.0 
		.GFXCUAD CUADRIC 
	]
	.GEL 
	[
	]
	.DUMMY 
	[
		.ANIMADOR 
		(
			AnimadorHumano 
			[
				.VOL 
				(
					Cilindro 
					[
						.RADIO 10.0 
						.ALTURA 50.0 
					]
				)
				.ANIM ALEFUS.ANI 
			]
		)
	]
	.BICHOS 
	(
		
		[
			.TOKEN MARLBORO_01 
			.COLORPUNTOLIBRETA OBJETO 
			.POS 
			[
				.XYZ 
				(
					-236.0 -394.0 0 
				)
				.ESC EXTERIOR 
			]
			.BANDO NEUTRAL 
			.HTIP TABC 
			.COMPORTAMIENTO 
			(
				ComporTabaco 
				[
					.NUMCIGARROS  5.0 
					.NUMUNIDADES  1.0 
				]
			)
			.ZONASELECCION 
			(
				Cilindro 
				[
					.RADIO 10.0 
					.ALTURA 20.0 
				]
			)
			.VOLCOLISION 
			(
				Cilindro 
				[
					.RADIO 12.0 
					.ALTURA 20.0 
				]
			)
			.ANIMADOR 
			(
				Animador2d 
				[
					.VOL 
					(
						Cilindro 
						[
							.RADIO 20.0 
							.ALTURA 30.0 
						]
					)
					.ANI TABACO.AN2 
				]
			)
			.ANGULO 0 
			.BICHOENCUAD 
			[
				.DIMBICHOX  1.0 
				.DIMBICHOY  1.0 
				.GFX CTABACO 
			]
			.LISTAS 
			(
				VISI SELE EJEC FLAS 
			)
		]
	)
]
`;
