export class FFI {
    static temp;
    static global_getCurrentGamePointer() { return Memory.readPointer(ptr('0x00B5A650')); };
    static global_getConfigPointer() { return Memory.readPointer(ptr('0x00B58490')); };
    static global_getRenderer() { return Memory.readPointer(ptr('0x00B58488')); };
    static global_getWorld() { return Memory.readPointer(ptr('0x00B64A28')); };
    static global_getUnknown_00B584D0() { return Memory.readPointer(ptr('0x00B584D0')); };
    static global_getCursorMapX() { return Memory.readFloat(ptr('0x00B619F0')); };
    static global_getCursorMapY() { return Memory.readFloat(ptr('0x00B619F4')); };
    static global_getCursorWorldX() { return Memory.readFloat(ptr('0x00B619F8')); };
    static global_getCursorWorldY() { return Memory.readFloat(ptr('0x00B619FC')); };
    static global_getCursorWorldZ() { return Memory.readFloat(ptr('0x00B61A00')); };
    static global_getInputHandler() { return Memory.readPointer(ptr('0x00B584BC')); };
    static sub_0041C7A0 = new NativeFunction(ptr('0x0041C7A0'), 'pointer', ['pointer'], 'thiscall');
    static sub_0041C860 = new NativeFunction(ptr('0x0041C860'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall');
    static sub_00411410 = new NativeFunction(ptr('0x00411410'), 'pointer', ['pointer', 'pointer'], 'thiscall');
    static sub_00414430 = new NativeFunction(ptr('0x00414430'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall');
    static sub_004113F0 = new NativeFunction(ptr('0x004113F0'), 'pointer', ['pointer', 'int'], 'thiscall');
    static sub_00414580 = new NativeFunction(ptr('0x00414580'), 'int', ['pointer', 'pointer'], 'thiscall');
    static sub_00591F10 = new NativeFunction(ptr('0x00591F10'), 'int', ['pointer'], 'thiscall');
    static sub_00561350 = new NativeFunction(ptr('0x00561350'), 'int', ['pointer', 'pointer'], 'thiscall');
    static sub_00562910 = new NativeFunction(ptr('0x00562910'), 'int', ['pointer', 'pointer', 'int', 'int'], 'thiscall');
    static sub_00591600 = new NativeFunction(ptr('0x00591600'), 'int', ['pointer', 'int'], 'thiscall');
    static sub_0058A470 = new NativeFunction(ptr('0x0058A470'), 'pointer', ['pointer'], 'thiscall');
    static sub_0058AE90 = new NativeFunction(ptr('0x0058AE90'), 'pointer', ['pointer', 'pointer', 'pointer'], 'thiscall');
    static world_getSceneIndexByName = new NativeFunction(ptr('0x0057F920'), 'int', ['pointer', 'pointer', 'pointer'], 'thiscall');
    static world_getSceneByIndex = new NativeFunction(ptr('0x00573F60'), 'pointer', ['pointer', 'int'], 'thiscall');
    static game_getCurrentViewportPointer = new NativeFunction(ptr('0x008ED2C0'), 'pointer', ['pointer'], 'thiscall');
    static game_toggleDebugOverlay = new NativeFunction(ptr('0x0051CF20'), 'int', ['pointer', 'int'], 'thiscall');
    static game_showDebugOverlay = new NativeFunction(ptr('0x0051CC10'), 'int', ['pointer', 'int', 'int'], 'thiscall');
    static game_hideDebugOverlay = new NativeFunction(ptr('0x0051CD30'), 'int', ['pointer', 'int'], 'thiscall');
    static viewport_enableDebugRenderOption = new NativeFunction(ptr('0x00523550'), 'int', ['pointer', 'int', 'int'], 'thiscall');
    static viewport_disableDebugRenderOption = new NativeFunction(ptr('0x005235B0'), 'int', ['pointer', 'int'], 'thiscall');
    static openListaEntesWindow = new NativeFunction(ptr('0x008ED9D0'), 'int', ['pointer'], 'thiscall');
    static openListaBichosWindow = new NativeFunction(ptr('0x008ED7A0'), 'int', ['pointer'], 'thiscall');
    static openListaMisionesWindow = new NativeFunction(ptr('0x008ED830'), 'int', ['pointer'], 'thiscall');
    static openListaRollingWindow = new NativeFunction(ptr('0x008ED8C0'), 'int', ['pointer'], 'thiscall');
    static openVariablesGeneralesWindow = new NativeFunction(ptr('0x008ED950'), 'int', ['pointer'], 'thiscall');
    static openDeveloperWindow = new NativeFunction(ptr('0x0060F200'), 'int', ['pointer'], 'thiscall');
    static getActorList = new NativeFunction(ptr('0x004DE1F0'), 'int', ['pointer', 'pointer', 'int'], 'thiscall');
    static initializeActorLinkedListContainer = new NativeFunction(ptr('0x00472820'), 'int', ['pointer'], 'thiscall');
    // TODO: this function should be replaced with an object reference  
    static getParameterForGetActorList = new NativeFunction(ptr('0x004EDFF0'), 'pointer', [], 'thiscall')
}