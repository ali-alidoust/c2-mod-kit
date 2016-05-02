/// <reference path="./Game.ts" />
/// <reference path="./FFI.ts" />
/// <reference path="./Config" />
/// <reference path="./Global00B584D0.ts" />
/// <reference path="../common/NativeUtils.ts" />



class c2 {
    public static getCurrentGame() {
        return new C2.Game(C2.FFI.global_getCurrentGamePointer());
    }

    public static getConfig() {
        return new C2.Config(C2.FFI.global_getConfigPointer());
    }

    public static getGlobal00B584D0() {
        return new C2.Global00B584D0(C2.FFI.global_getUnknown_00B584D0());
    }

    public static getActorList() {
        var actors = [];

        /**
         * Object sent to sub_4DE1F0 to get list of the items
         */
        class Container {
            public selfPointer: NativePointer;

            @native(0x00, 'uint8', true)
            public prop00: number;

            @native(0x02, 'uint8', true)
            public prop02: number;

            @native(0x03, 'uint8', true)
            public prop03: number;

            @native(0x04, 'uint8', true)
            public prop04: number;

            @native(0x09, 'uint8', true)
            public isEmpty: boolean;

            @native(0x10, 'pointer', true)
            public firstPointer: NativePointer;

            @native(0x0C, 'pointer', true)
            public lastPointer: NativePointer;

            constructor(address) {
                if ((address === undefined) || address.isNull()) {
                    address = Memory.alloc(0x14);
                }

                this.selfPointer = address;
            }
        }

        function LinkedListItem(address) {
            this.selfPointer = address;
            if (!address.isNull()) {
                this.nextPointer = Memory.readPointer(address.add(0x04));
                this.actorPointer = Memory.readPointer(address.add(0x08));
            }
        }

        var container = new Container(NULL);
        C2.FFI.initializeActorLinkedListContainer(container.selfPointer);

        var param = C2.FFI.getParameterForGetActorList();
        C2.FFI.getActorList(container.selfPointer, param, 1);

        if (!container.isEmpty) {
            var currentItem = new LinkedListItem(container.firstPointer);
            while (!currentItem.selfPointer.equals(container.lastPointer)) {
                var actor = new C2.Actor(currentItem.actorPointer);
                actors.push(actor);
                currentItem = new LinkedListItem(currentItem.nextPointer);
            }
        }

        return actors;
    }
};

// require('./c2.utils.js');
// require('./c2.ffi.js');
// require('./Game.js');
// require('./Config.js');
// require('./Actor.js');
// require('./Viewport.js');
// require('./Global00B584D0.js');
// require('./ObjGameOffset640.js');
// require('./Events.js')
// require('./Hooks.js');

