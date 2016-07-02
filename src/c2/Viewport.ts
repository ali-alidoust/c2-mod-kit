import { NativeObject } from '../../lib/spectre/NativeObject';
import { FFI } from './FFI';

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