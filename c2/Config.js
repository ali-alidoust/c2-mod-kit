'use strict';

require('./utils/utils.js');

global.Config = function(address) {
    this.selfPointer = address;
}

global.Config.prototype = {
    selfPointer: NULL
}

Object.defineProperties(global.Config.prototype, {
    atmosphericEffects:             new NativeProperty('0x0068', 'bool8', true), // EFECTOS_ATMOSFERICOS
    guiZoom:                        new NativeProperty('0x0069', 'bool8', true), // ZOOM_GUAI
    show3DFaces:                    new NativeProperty('0x006A', 'bool8', true), // CARAS3D
    nivel:                          new NativeProperty('0x006C', 'int32', true), // NIVEL
    disableAdaptiveActorPainting:   new NativeProperty('0x006A', 'bool8', true), // QUITA_PINTADO_BICHOS_ADAPTATIVO
    adaptiveFrameRate:              new NativeProperty('0x006B', 'bool8', true), // FRAMEADO_ADAPTATIVO              
    showMomentaryMessages:          new NativeProperty('0x00B0', 'bool8', true), // MENSAJE_MOMENTANEO
    // TODO: there are more
})