/// <reference path="Frida.d.ts" />
import { NativeGetterFunc } from './NativeGetterFunc';
import { NativeSetterFunc } from './NativeSetterFunc';
export declare abstract class Primitive {
    abstract getGetterFunc(): NativeGetterFunc;
    abstract getSetterFunc(): NativeSetterFunc;
}
export declare var POINTER: Primitive;
export declare var FLOAT: Primitive;
export declare var DOUBLE: Primitive;
export declare var INT8: Primitive;
export declare var UINT8: Primitive;
export declare var INT16: Primitive;
export declare var UINT16: Primitive;
export declare var INT32: Primitive;
export declare var UINT32: Primitive;
export declare var BOOL8: Primitive;
export declare var UNKNOWN8: Primitive;
export declare var UNKNOWN16: Primitive;
export declare var UNKNOWN32: Primitive;
export declare var PSTRING_UTF8: Primitive;
