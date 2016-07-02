import { property } from '../../lib/spectre/NativeDecorations'; 
import { NativeObject } from '../../lib/spectre/NativeObject';

import { FFI } from './FFI';
import { Viewport } from './Viewport';

import { ObjGameOffset640 } from './ObjGameOffset640';

export class Game extends NativeObject {
    @property(0x0018, NativeObject, false)
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