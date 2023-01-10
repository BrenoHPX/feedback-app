interface Avaliacao {
	nomeAvaliador: string
	qualidade1: string
	qualidade2: string
	qualidade3: string
}

export interface IDatabase {
	nomeColaborador: string
	avaliacoes: Avaliacao[]
}

export const database: IDatabase[] = [
	{
		nomeColaborador: 'Mateus Zimmer',
		avaliacoes: [
			{
				nomeAvaliador: 'Breno',
				qualidade1: 'Inteligênte',
				qualidade2: 'Curioso',
				qualidade3: 'Proativo'
			},
			{
				nomeAvaliador: 'Fabi',
				qualidade1: 'Inteligênte',
				qualidade2: 'Curioso',
				qualidade3: 'Proativo'
			}
		]
	},
	{
		nomeColaborador: 'Breno',
		avaliacoes: [
			{
				nomeAvaliador: 'MZ',
				qualidade1: 'Inteligênte',
				qualidade2: 'Curioso',
				qualidade3: 'Proativo'
			},
			{
				nomeAvaliador: 'Fabi',
				qualidade1: 'Inteligênte',
				qualidade2: 'Curioso',
				qualidade3: 'Proativo'
			}
		]
	}
]
