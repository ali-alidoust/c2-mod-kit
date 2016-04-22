require('./c2.ffi.js');
require('./enums/KeyStateEnum.js');
require('./enums/ModifierKeyStateEnum.js');
require('./macros/SpawnGermanSoldier.js');
require('./macros/SpawnCigarettePack.js')

global.c2.events = {
    onKeyboardEvent(e) {
        // TODO
		if ((e.keyState == KeyStateEnum.KEY_DOWN) &&
			(e.keyCode == 'X'.charCodeAt()) &&
			(e.modifierKeyState == ModifierKeyStateEnum.KEY_CTRL)) {
			var g = c2.getCurrentGame();
			var glob = c2.getGlobal00B584D0();
			var obj = g.getObjGameOffset640();

			var mymacro = c2.macros.spawnGermanSoldier(
				c2.ffi.global_getCursorWorldX(),
				c2.ffi.global_getCursorWorldY(),
				c2.ffi.global_getCursorWorldZ()
			);

			console.log(glob.insertActor(mymacro, obj));
		} else if ((e.keyState == KeyStateEnum.KEY_DOWN) &&
			(e.keyCode == 'Z'.charCodeAt()) &&
			(e.modifierKeyState == ModifierKeyStateEnum.KEY_CTRL)) {
			var g = c2.getCurrentGame();
			var glob = c2.getGlobal00B584D0();
			var obj = g.getObjGameOffset640();

			var mymacro = c2.macros.spawnCigarettePack(
				c2.ffi.global_getCursorWorldX(),
				c2.ffi.global_getCursorWorldY(),
				c2.ffi.global_getCursorWorldZ()
			);

			console.log(glob.insertActor(mymacro, obj));
		}
    }
}