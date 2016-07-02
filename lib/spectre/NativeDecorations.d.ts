/// <reference path="Frida.d.ts" />
import { NativeObject } from './NativeObject';
import { Primitive } from './Primitives';
export declare function property<T extends NativeObject>(offset: number, type: {
    new (address): T;
} | Primitive, writable?: boolean, length?: number): PropertyDecorator;
