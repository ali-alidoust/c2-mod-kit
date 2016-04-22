'use strict';
require('./utils/utils.js');

global.c2.macros = global.c2.macros || {};

global.c2.macros.spawnCigarettePack = function(x, y, z) {
       return template.format(x, y, z);
}

var template = `
[
	.TOKEN MARLBORO_01 
	.COLORPUNTOLIBRETA OBJETO 
	.POS 
	[
		.XYZ 
		(
			{0} {1} {2} 
		)
		.ESC EXTERIOR 
	]
	.BANDO NEUTRAL 
	.HTIP TABC 
	.COMPORTAMIENTO 
	(
		ComporTabaco 
		[
			.NUMCIGARROS  5.0 
			.NUMUNIDADES  1.0 
		]
	)
	.ZONASELECCION 
	(
		Cilindro 
		[
			.RADIO 10.0 
			.ALTURA 20.0 
		]
	)
	.VOLCOLISION 
	(
		Cilindro 
		[
			.RADIO 12.0 
			.ALTURA 20.0 
		]
	)
	.ANIMADOR 
	(
		Animador2d 
		[
			.VOL 
			(
				Cilindro 
				[
					.RADIO 20.0 
					.ALTURA 30.0 
				]
			)
			.ANI TABACO.AN2 
		]
	)
	.ANGULO 0 
	.BICHOENCUAD 
	[
		.DIMBICHOX  1.0 
		.DIMBICHOY  1.0 
		.GFX CTABACO 
	]
	.LISTAS 
	(
		VISI SELE EJEC FLAS 
	)
]
`;