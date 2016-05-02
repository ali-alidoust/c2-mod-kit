/// <reference path="../common/NativeObject.ts" />
/// <reference path="../common/NativeUtils.ts" />
/// <reference path="./Viewport.ts" />
/// <reference path="./ObjGameOffset640.ts" />

namespace C2 {
    export class Game extends NativeObject {

        @native(0x0018, NativeObject, false)
        public currentUnknownOffset18: NativeObject;

        /**
         * Turns on/off the debug overlays
         * @param {Number} debugOverlayId - one of DebugOverlayEnum values
         */
        public toggleDebugOverlay(debugOverlayId) { 
            return FFI.game_toggleDebugOverlay(this.selfPointer, debugOverlayId);
        }

        public getMainViewport() : Viewport {
            return new Viewport(FFI.game_getCurrentViewportPointer(this.selfPointer));
        }

        public getObjGameOffset640() {
            return new ObjGameOffset640(Memory.readPointer(this.selfPointer.add(0x640)));
        }
    };
}