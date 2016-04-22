'use strict';

require('./utils/utils.js');

// Keyboard Event
Interceptor.attach(ptr('0x008D99A0'), {
    onEnter: function (args) {
        eventParamAddress = ptr(args[1]);
        
        var keyboardEventParam = {
            keyState: Memory.readU8(eventParamAddress.add(0x00)),
            keyCode: Memory.readU32(eventParamAddress.add(0x04)),
            modifierKeyState: Memory.readU8(eventParamAddress.add(0x10))
        }
        
        console.log(JSON.stringify(keyboardEventParam));
        c2.events.onKeyboardEvent(keyboardEventParam);
    }
});