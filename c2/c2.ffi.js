'use strict';

global.c2.ffi = {
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