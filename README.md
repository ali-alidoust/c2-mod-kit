Commandos 2 Mod Kit
===
A JavaScript shell to study and modify Commandos 2 video game. It utilizes [Frida](https://github.com/frida/frida) to inject custom javascript code into the game.

## Current Features
* Toggle overlay debug info (FPS, Mouse location info, ...).
* Toggle debug render options (Sectors, Sector Ids, Masks, ...).
* Get the list of all objects in the scene.
* Create and spawn custom objects using Commandos 2 macros.

## Planned Features
* Save modified maps.
* Inject custom functionality into the game.

## Building
1. You need Python 2.7 with Frida installed.
  For some unknown reason, you might have to install javascript python package manually:
  
    pip install javascript
    
2. TODO