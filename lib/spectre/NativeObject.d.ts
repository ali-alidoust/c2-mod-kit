/// <reference path="Frida.d.ts" />
export declare class NativeObject {
    selfPointer: NativePointer;
    constructor(address: NativePointer);
    isNull(): boolean;
}
