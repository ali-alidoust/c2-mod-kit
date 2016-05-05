/// <reference path="../common/NativeUtils.ts" />
/// <reference path="../common/NativeObject.ts" />

module C2 {
    export class Renderer extends NativeObject {
        @native(0x4C, 'float', true)
        updateRate: number;
    }
}