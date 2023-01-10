import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { UserCard } from '../card/Card'
import { database } from '../../storage/dataBase'
import { respostas } from '../../store/store'
import { useEffect } from 'react'

interface SimpleAccordionProps {
	avaliacoes: any
}

interface avaliacaoProps {
	nomeColaborador: string
	nomeAvaliador: string
	qualidade1: string
	qualidade2: string
	qualidade3: string
}

const SimpleAccordion: React.FC<SimpleAccordionProps> = ({ avaliacoes }) => {
	// let arrayColaboradores: string[] = []

	// for (let avaliacao of avaliacoes) {
	// 	if (!arrayColaboradores.some(avaliacao.nomeColaborador))
	// 		arrayColaboradores.push(avaliacao.nomeColaborador)
	// }

	// console.log(arrayColaboradores)

	// function removeIguais(collabsList: any){
	// 	collabsList.filter((name, index, self) => self.)
	// }

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Typography>nome colaborador</Typography>
			</AccordionSummary>
			<AccordionDetails>nome avaliador</AccordionDetails>
		</Accordion>
	)
}

export default SimpleAccordion
