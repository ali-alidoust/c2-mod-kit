namespace C2.Macros {
	export class SpawnGermanSoldier extends Macro {
		public token: string;
		public x: number;
		public y: number;
		public z: number;
		constructor(token: string, x: number, y: number, z: number) {
			super();
			this.token = token;
			this.x = x;
			this.y = y;
			this.z = z;
		}

		public toString() {
			return `
[
	.POS 
	[
		.XYZ 
		(
			${this.x} ${this.y} ${this.z} 
		)
		.ESC EXTERIOR 
	]
	.ANGULO 331.0 
	.TOKEN ${this.token} 
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
		
	)
]
`;
		}
	}
}