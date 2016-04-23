'use strict';

global.NativeProperty = function (offset, type, writable, length) {
    var retval = {};
    retval.get = new NativeGetter(offset, type, length);
    retval.enumerable = true;
    if (writable == true) {
        retval.set = new NativeSetter(offset, type, length);
    } else {
        retval.set = function (value) { throw 'this property is read-only.' };
    }
    return retval;
}

global.NativeGetter = function(offset, type, length) {
    var readers = {
        'unknown32':    Memory.readU32,
        'unknown16':    Memory.readU16,
        'unknown8':     Memory.readU8,
        'pointer':      Memory.readPointer,
        'bool8':        Memory.readU8,
        'bool32':       Memory.readU32,
        'int8':         Memory.readS8,
        'uint8':        Memory.readU8,
        'int16':        Memory.readS16,
        'uint16':       Memory.readU16,
        'int32':        Memory.readS32,
        'uint32':       Memory.readU32,
        'int64':        Memory.readS64,
        'uint64':       Memory.readU64,
        'float':        Memory.readFloat,
        'double':       Memory.readDouble,
        'string':       Memory.readCString, // Reads string from pointer
    }
    
    if (!(type in readers)) {
        throw 'No getter exists for type:' + type;
    }
    
    var getter = readers[type];
    
    return function() {
        var value;
        if (type.startsWith('string')) {
            value = getter(this.selfPointer.add(offset), length);
        } else {
            value = getter(this.selfPointer.add(offset));    
        }
        
        if (type.startsWith('bool')) {
            return value == 1;
        }
        return value;
    }
}

global.NativeSetter = function(offset, type, length) {
    var writers = {
        'unknown32':    Memory.writeU32,
        'unknown16':    Memory.writeU16,
        'unknown8':     Memory.writeU8,
        'pointer':      Memory.writePointer,
        'bool8':        Memory.writeU8,
        'bool32':       Memory.writeU32,
        'int8':         Memory.writeS8,
        'uint8':        Memory.writeU8,
        'int16':        Memory.writeS16,
        'uint16':       Memory.writeU16,
        'int32':        Memory.writeS32,
        'uint32':       Memory.writeU32,
        'int64':        Memory.writeS64,
        'uint64':       Memory.writeU64,
        'float':        Memory.writeFloat,
        'double':       Memory.writeDouble,
        'string':       Memory.writeCString,
    }
    
    if (!(type in writers)) {
        throw 'No setter exists for type:' + type;
    }
    
    var setter = writers[type];
    
    return function(value) {
        if (type.startsWith('bool')) {
            value = value ? 1 : 0;
        }
        
        if (type.startsWith('string')) {
            setter(this.selfPointer.add(offset), value, length);
        } else {
            setter(this.selfPointer.add(offset), value);   
        }
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