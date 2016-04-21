'use strict';
global.c2 = {
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

require('./c2.utils.js');
require('./c2.ffi.js');
require('./Game.js');
require('./Config.js');
require('./Actor.js');
require('./Viewport.js');
require('./Global00B584D0.js');
require('./ObjGameOffset640.js');
require('./Events.js')
require('./Hooks.js');

