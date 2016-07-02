import { KeyCode } from '../../../lib/spectre/KeyCode';
import { KeyState } from '../Enums/KeyState.ts';
import { ModifierKeyState } from '../Enums/ModifierKeyState.ts';

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