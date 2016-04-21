'use strict';

require('./utils/utils.js');

global.Config = function(address) {
    this.selfPointer = address;
}

global.Config.prototype = {
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