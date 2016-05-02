namespace C2 {
    export class Config extends NativeObject {
        // EFECTOS_ATMOSFERICOS
        @native(0x0068, 'bool8', true)
        public atmosphericEffects: boolean;
        
        // ZOOM_GUAI
        @native(0x0069, 'bool8', true)              
        public guiZoom: boolean;

        // CARAS3D
        @native(0x006A, 'bool8', true)
        public show3DFaces: boolean;                 

        // NIVEL
        @native(0x006C, 'int32', true)
        public nivel: number;
        
        // FRAMEADO_ADAPTATIVO
        @native(0x006B, 'bool8', true)
        public adaptiveFrameRate: boolean;          
        
        // MENSAJE_MOMENTANEO
        @native(0x00B0, 'bool8', true)
        public showMomentaryMessages: boolean; 
    }
}