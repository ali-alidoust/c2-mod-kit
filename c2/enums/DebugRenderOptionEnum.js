'use strict';

var DebugRenderOptionEnum = Object.freeze({
    SECTORS_SOLID:              0x2,
    SECTORS_TRANSPARENT:        0x3,
    OCCLUSION_SECTORS:          0x4,
    SECTOR_ZONES:               0x6,
    SECTOR_ZONES_3D:            0x7,
    OCCLUSIONS:                 0xF,
    OBSTACLES:                  0x10,
    COORDINATES:                0x25,
    PHYSICS:                    0x1C,
    OBJECT_NAMES:               0x16,
    SOUND_TRIGGERS:             0x17,
    PHYSICAL_SOUNDS:            0x18,
    PATHS:                      0x19,
    PATHFINDER_CACHE:           0x37,
    HASH_GRID:                  0x1F,
    EXPLOSION_TRIGGERS:         0x20,
    // TODO: There are more
});