/// <reference path="../../common/KeyCode.ts" />
/// <reference path="../Enums/KeyState.ts" />
/// <reference path="../Enums/ModifierKeyState.ts" />


namespace C2.Events {
    export class KeyboardEventParameter {
        public keyCode: KeyCode;
        public keyState: KeyState;
        public modifierKeyState: ModifierKeyState;
        
        constructor(keyCode, keyState, modifierKeyState) {
            this.keyCode = keyCode;
            this.keyState = keyState;
            this.modifierKeyState = modifierKeyState;
        }
    }
    
    export interface IKeyboardEventCallback {
        (e: KeyboardEventParameter): void;
    }
}