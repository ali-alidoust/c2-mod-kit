
import { property } from '../../lib/spectre/NativeDecorations';
import { BOOL8, INT32 } from '../../lib/spectre/Primitives'; 
import { NativeObject } from '../../lib/spectre/NativeObject';

export class Config extends NativeObject {
    // EFECTOS_ATMOSFERICOS
    @property(0x0068, BOOL8, true)
    public atmosphericEffects: boolean;
    
    // ZOOM_GUAI
    @property(0x0069, BOOL8, true)              
    public guiZoom: boolean;

    // CARAS3D
    @property(0x006A, BOOL8, true)
    public show3DFaces: boolean;                 

    // NIVEL
    @property(0x006C, INT32, true)
    public nivel: number;
    
    // FRAMEADO_ADAPTATIVO
    @property(0x006B, BOOL8, true)
    public adaptiveFrameRate: boolean;          
    
    // MENSAJE_MOMENTANEO
    @property(0x00B0, BOOL8, true)
    public showMomentaryMessages: boolean; 
}