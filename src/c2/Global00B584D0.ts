/// <reference path="./Actor.ts" />


namespace C2 {
    export class Global00B584D0 extends NativeObject {
        insertActor(macro, objGameOffset640) {
            // TODO: refactor this function
        var stringPointer = Memory.allocUtf8String(macro);
        var eax, ecx, edx, edi, esi, ebx;
        var retval;
        
        eax = FFI.sub_00414430(this.selfPointer, stringPointer, objGameOffset640.selfPointer)
        // console.log(eax.toString());
        edi = eax;
        ebx = Memory.readPointer(edi.add(0x8));
        
        //var actor = new Actor(c2.ffi.sub_004113F0(this.selfPointer, 0x248))
        eax = FFI.sub_004113F0(this.selfPointer, 0x248);
        esi = NULL;
        if (!eax.isNull()) {
            var actor = new Actor(FFI.sub_0058A470(eax))
            // eax = c2.ffi.sub_0058A470(eax);
            // esi = eax;
        }
        
        FFI.sub_0058AE90(actor.selfPointer, ebx, NULL);
        FFI.sub_00591F10(actor.selfPointer);
        ecx = FFI.global_getWorld();
        FFI.sub_00561350(ecx, actor.selfPointer);
        FFI.sub_00562910(ecx, actor.selfPointer, 0xD, 0x1);
        FFI.sub_00591600(actor.selfPointer, 0x1);
        FFI.sub_00414580(this.selfPointer, edi);
        
        edx = Memory.readPointer(actor.selfPointer);
        var f1 = new NativeFunction(Memory.readPointer(edx.add(0x4)), 'pointer', ['pointer', 'int', 'int'], 'thiscall');
        f1(actor.selfPointer, 0x7D, 0x0);
        
        return actor;            
        }
    } 
}