/// <reference path="Frida.d.ts" />
export interface NativeSetterFunc {
    (address: NativePointer, value: any, length: number): void;
}
export declare function NativeSetter(offset: number, setter: NativeSetterFunc, length: number): (value: any) => void;
