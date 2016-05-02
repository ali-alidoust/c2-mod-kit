/// <reference path="../common/Frida.ts"/>
/// <reference path="../common/NativeObject.ts" />
/// <reference path="./FFI.ts"/>

namespace C2 {
    export class Viewport extends NativeObject {
        /**
         * Enables debug render options
         * @param {Number} - debugRenderOptionId - one of DebugRenderOptionEnum values
         * @param {Number} - unknown
         */
        enableDebugRenderOption(debugRenderOptionId, unknown) {
            return FFI.viewport_enableDebugRenderOption(this.selfPointer, debugRenderOptionId, unknown);
        }

        /**
         * Disables debug render options
         * @param {Number} - debugRenderOptionId - one of DebugRenderOptionEnum values
         */
        disableDebugRenderOption(debugRenderOptionId) {
            return FFI.viewport_disableDebugRenderOption(this.selfPointer, debugRenderOptionId);
        }
    }
}