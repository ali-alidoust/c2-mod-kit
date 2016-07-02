/// <reference path="Frida.d.ts" />
export interface NativeGetterFunc {
    (address: NativePointer, length: number): any;
}
export declare function NativeGetter(offset: number, getter: NativeGetterFunc, length: number): () => any;
