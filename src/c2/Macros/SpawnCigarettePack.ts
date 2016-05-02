namespace C2.Macros {
	export class SpawnCigarettePack extends Macro {
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
	.TOKEN ${this.token} 
	.COLORPUNTOLIBRETA OBJETO 
	.POS 
	[
		.XYZ 
		(
			${this.x} ${this.y} ${this.z} 
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
		}
	}
}