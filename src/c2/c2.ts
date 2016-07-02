/// <reference path="../../lib/spectre/Frida.d.ts" />

import { property } from '../../lib/spectre/NativeDecorations';
import { UINT8, POINTER } from '../../lib/spectre/Primitives';
import { Game } from './Game';
import { FFI } from './FFI';
import { Config } from './Config';
import { Renderer } from './Renderer';
import { Global00B584D0 } from './Global00B584D0';
import { Actor } from './Actor';

export class c2 {
    public static getCurrentGame() {
        return new Game(FFI.global_getCurrentGamePointer());
    }

    public static getConfig() {
        return new Config(FFI.global_getConfigPointer());
    }

    public static getGlobal00B584D0() {
        return new Global00B584D0(FFI.global_getUnknown_00B584D0());
    }
    
    public static getRenderer() {
        return new Renderer(FFI.global_getRenderer());
    }

    public static getActorList() {
        var actors = [];

        /**
         * Object sent to sub_4DE1F0 to get list of the items
         */
        class Container {
            public selfPointer: NativePointer;

            @property(0x00, UINT8, true)
            public prop00: number;

            @property(0x02, UINT8, true)
            public prop02: number;

            @property(0x03, UINT8, true)
            public prop03: number;

            @property(0x04, UINT8, true)
            public prop04: number;

            @property(0x09, UINT8, true)
            public isEmpty: boolean;

            @property(0x10, POINTER, true)
            public firstPointer: NativePointer;

            @property(0x0C, POINTER, true)
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
        FFI.initializeActorLinkedListContainer(container.selfPointer);

        var param = FFI.getParameterForGetActorList();
        FFI.getActorList(container.selfPointer, param, 1);

        if (!container.isEmpty) {
            var currentItem = new LinkedListItem(container.firstPointer);
            while (!currentItem.selfPointer.equals(container.lastPointer)) {
                var actor = new Actor(currentItem.actorPointer);
                actors.push(actor);
                currentItem = new LinkedListItem(currentItem.nextPointer);
            }
        }

        return actors;
    }
};