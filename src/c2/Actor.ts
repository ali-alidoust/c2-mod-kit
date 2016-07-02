import { property } from '../../lib/spectre/NativeDecorations';
import { NativeObject } from '../../lib/spectre/NativeObject';
import { BOOL8, INT32, UINT8, UINT32, FLOAT, UNKNOWN16, UNKNOWN32, POINTER, PSTRING_UTF8 } from '../../lib/spectre/Primitives';

export class Actor extends NativeObject {
    @property(0x0000, POINTER, false)
    public _pointer0000;

    @property(0x0004, UINT32, true)
    public _null0004;

    @property(0x0008, POINTER, false)
    public _pointer0008;

    @property(0x000C, POINTER, false)
    public _pointer000C;

    @property(0x0010, PSTRING_UTF8, true, -1)
    public name;

    @property(0x0030, BOOL8, true)
    public _bool0030;

    @property(0x0031, BOOL8, true)
    public _bool0031;

    @property(0x0032, BOOL8, true)
    public _bool0032;

    @property(0x0033, BOOL8, true)
    public _bool0033;

    @property(0x0034, BOOL8, true)
    public _bool0034;

    @property(0x0035, BOOL8, true)
    public _bool0035;

    @property(0x0036, UNKNOWN16, true)
    public _null0036;

    @property(0x0038, PSTRING_UTF8, true, 4)
    public _string0038;

    @property(0x0054, POINTER, false)
    public _pointer0054;

    @property(0x0058, POINTER, false)
    public _pointer0058;

    @property(0x005C, UNKNOWN32, true)
    public _unknown005C;

    @property(0x0060, UNKNOWN32, true)
    public _unknown0060;

    @property(0x0064, UNKNOWN32, true)
    public _null0064;

    @property(0x0068, UNKNOWN32, true)
    public _unknown0068;

    @property(0x006C, UNKNOWN32, false)
    public _pointer006C;

    @property(0x0070, UNKNOWN32, true)
    public _null0070;

    @property(0x0074, UNKNOWN32, true)
    public _unknown0074;

    @property(0x007C, UNKNOWN32, true)
    public _null007C;

    @property(0x0080, UNKNOWN32, true)
    public _int0080;

    @property(0x0084, UNKNOWN32, true)
    public _null0084;

    @property(0x0088, INT32, true)
    public _int0088;

    @property(0x008C, UNKNOWN32, true)
    public _null008C;

    @property(0x0090, UNKNOWN32, true)
    public _null0090;

    @property(0x0094, INT32, true)
    public _int0094;

    @property(0x0098, UNKNOWN32, true)
    public _null0098;

    @property(0x0074, UNKNOWN32, true)
    public _unknown009C;

    @property(0x00A0, UNKNOWN32, true)
    public _null00A0;

    @property(0x00A4, INT32, true)
    public _int00A4;

    @property(0x00A8, UNKNOWN32, true)
    public _null00A8;

    @property(0x00AC, UNKNOWN32, true)
    public _null00AC;

    @property(0x00B0, UNKNOWN32, true)
    public _null00B0;

    @property(0x00B4, UNKNOWN32, true)
    public _null00B4;

    @property(0x00B8, POINTER, false)
    public _pointer00B8;

    @property(0x00BC, UNKNOWN32, true)
    public _null00BC;

    @property(0x00C0, INT32, true)
    public _int00C0;

    @property(0x00C4, UNKNOWN32, true)
    public _null00C4;

    @property(0x00C8, UNKNOWN32, true)
    public _null00C8;

    @property(0x00CC, UINT32, true)
    public counter;

    @property(0x00D0, FLOAT, true)
    public _float00D0;

    @property(0x00D4, UNKNOWN32, true)
    public _null00D4;

    @property(0x00D8, UNKNOWN32, true)
    public _null00D8;

    @property(0x00DC, POINTER, false)
    public _pointer00DC;

    @property(0x00E0, UNKNOWN32, true)
    public _null00E0;

    @property(0x00E4, FLOAT, true)
    public x;

    @property(0x00E8, FLOAT, true)
    public y;

    @property(0x00EC, FLOAT, true)
    public z;

    @property(0x00F0, POINTER, false)
    public _pointer00F0;

    @property(0x00F4, UNKNOWN32, true)
    public _null00F4;

    @property(0x00F8, UNKNOWN32, true)
    public _null00F8;

    @property(0x00FC, UNKNOWN32, true)
    public _null00FC;

    @property(0x0100, UNKNOWN32, true)
    public _null0100;

    @property(0x0104, UNKNOWN32, true)
    public _unknown0104;

    @property(0x0108, UNKNOWN32, true)
    public _unknown0108;

    @property(0x010C, UNKNOWN32, true)
    public _unknown010C;

    @property(0x0110, UNKNOWN32, true)
    public _unknown0110;

    @property(0x0114, UNKNOWN32, true)
    public _null0114;

    @property(0x0118, UNKNOWN32, true)
    public _null0118;

    @property(0x011C, POINTER, false)
    public _pointer011C;

    @property(0x0120, POINTER, false)
    public _pointer0120;
}