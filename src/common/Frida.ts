declare var Memory: any;
declare function NativeFunction(...args: any[]): void;
declare interface NativePointer {
    isNull();
    add(offset);
}
declare var Interceptor: any;
declare var ptr: any;
declare var NULL: NativePointer;

declare var global: any;
declare var rpc: any;
declare var send: any;