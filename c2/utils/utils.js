'use strict';

global.NativeGetter = function(offset, type) {
    var readers = {
        'pointer':  Memory.readPointer,
        'int8':     Memory.readS8,
        'uint8':    Memory.readU8,
        'int16':    Memory.readS16,
        'uint16':   Memory.readU16,
        'int32':    Memory.readS32,
        'uint32':   Memory.readU32,
        'int64':    Memory.readS64,
        'uint64':   Memory.readU64,
        'float':    Memory.readFloat,
        'double':   Memory.readDouble,
        'string':   Memory.readCString, // Reads string from pointer
    }
    
    if (!(type in readers)) {
        throw 'No getter exists for type:' + type;
    }
    
    var getter = readers[type];
    
    return function() {
        return getter(this.selfPointer.add(offset));
    }
}

global.NativeSetter = function(offset, type) {
    var writers = {
        'pointer':  Memory.writePointer,
        'int8':     Memory.writeS8,
        'uint8':    Memory.writeU8,
        'int16':    Memory.writeS16,
        'uint16':   Memory.writeU16,
        'int32':    Memory.writeS32,
        'uint32':   Memory.writeU32,
        'int64':    Memory.writeS64,
        'uint64':   Memory.writeU64,
        'float':    Memory.writeFloat,
        'double':   Memory.writeDouble,
        'string':   Memory.writeCString, // Reads string from pointer
    }
    
    if (!(type in writers)) {
        throw 'No setter exists for type:' + type;
    }
    
    var setter = writers[type];
    
    return function(value) {
        return setter(this.selfPointer.add(offset), value);
    }
}

// String.format function
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}