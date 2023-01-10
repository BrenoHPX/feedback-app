import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { feedbacksDB } from '../../storage/dataBase'
import { UserCard as Card } from '../card/Card'
import { respostas } from '../../store/store'

function SimpleAccordion() {
	return respostas.map((m) => {
		return (
			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography></Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Card></Card>
					</AccordionDetails>
				</Accordion>
			</div>
		)
	})
}

export default SimpleAccordion
