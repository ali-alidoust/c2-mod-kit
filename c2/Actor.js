'use strict';

require('./utils/utils.js');

global.Actor = function(address) {
    this.selfPointer = address;
}

global.Actor.prototype = {
    getActorName:   new NativeGetter('0x10', 'string'),
    setActorName:   new NativeSetter('0x10', 'string'),
}