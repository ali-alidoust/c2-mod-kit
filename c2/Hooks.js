'use strict';

Interceptor.attach(ptr('0x008D99A0'), {
    onEnter: function(args) {
        c2.events.onKeyboardEvent();
    }
});