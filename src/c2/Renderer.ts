import { property } from '../../lib/spectre/NativeDecorations'; 
import { NativeObject } from '../../lib/spectre/NativeObject';
import { FLOAT } from '../../lib/spectre/Primitives';

export class Renderer extends NativeObject {
    @property(0x4C, FLOAT, true)
    updateRate: number;
}