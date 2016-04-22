'use strict';
require('./utils/utils.js');
global.c2.macros = global.c2.macros || {};

global.c2.macros.spawnGermanSoldier = function(x, y, z) {
       return template.format(x, y, z);
}

var template = `
[
	.POS 
	[
		.XYZ 
		(
			{0} {1} {2} 
		)
		.ESC EXTERIOR 
	]
	.ANGULO 331.0 
	.TOKEN CABO_03 
	.BANDO ALEMAN 
	.HTIP SOLD 
	.COMPORTAMIENTO 
	(
		ComporAlemanScript
		[
			.VIGILADOR
			[
				.AMPL_NORMAL 70
				.MAX_ANG_BARRIDO 50
				.LONG_NORMAL 600

		   ]
			.EVENTOS_RUTA 
			(
				
			)
			.DISPARADOR 
			[
				.ARMA ALEMAN_FUSIL 
			]
			.NUM_GRANADAS 0 
			.ANIMACION ALEFUS.ANI 
			.GESTOR_MOVIMIENTO 
			[
			]
		]
	)
	.VISTA 
	(
		VistaTriangular 
		[
		]
	)
	.OIDO 
	(
		Oido 
		[
		]
	)
	.MOTOR 
	(
		MotorPeaton 
		[
		]
	)
	.ANIMADOR 
	(
		AnimadorHumano 
		[
			.VOL 
			(
				Cilindro 
				[
					.RADIO 20.0 
					.ALTURA 50.0 
				]
			)
			.ANIM ALEFUS.ANI 
		]
	)
	.VOLCOLISION 
	(
		Cilindro 
		[
			.RADIO 12.0 
			.ALTURA 50.0 
		]
	)
	.TIPOCOLISION PEATON 
	.ZONASELECCION 
	(
		Cilindro 
		[
			.RADIO 10.0 
			.ALTURA 50.0 
		]
	)
	.LISTAS 
	(
		CHOC SELE VISI EJEC FLAE 
	)
	.COLORPUNTOLIBRETA ALEMAN 
	.USAHAB 
	[
	]
	.PUEDE_CONDUCIR 
	(
		WILLIS ZODIAK CAMION CANON LANCHA_MOTORA NIDO_AMETRALLADORAS ASCENSOR MONTA_ALEMAN SILLA CAMA 
	)
	.MICUADRICULA 
	[
		.DIMCUADX  4.0 
		.DIMCUADY  6.0 
		.GFXCUAD CUADRIC 
	]
	.GEL 
	[
	]
	.DUMMY 
	[
		.ANIMADOR 
		(
			AnimadorHumano 
			[
				.VOL 
				(
					Cilindro 
					[
						.RADIO 10.0 
						.ALTURA 50.0 
					]
				)
				.ANIM ALEFUS.ANI 
			]
		)
	]
	.BICHOS 
	(
		
		[
			.TOKEN MARLBORO_01 
			.COLORPUNTOLIBRETA OBJETO 
			.POS 
			[
				.XYZ 
				(
					-236.0 -394.0 0 
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
	)
]
`;