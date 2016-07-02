declare var global: any;
declare var Memory: any;
declare function NativeFunction(...args: any[]): void;
interface NativePointer {
    isNull(): any;
    add(offset: any): any;
}
declare var Interceptor: any;
declare var ptr: any;
declare var NULL: NativePointer;
