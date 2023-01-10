import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

export function UserCard() {
	const [open, setOpen] = React.useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	const handleToggle = () => {
		setOpen(!open)
	}

	return (
		<div>
			<Button onClick={handleToggle}>Mostrar Feedback</Button>
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1
				}}
				open={open}
				onClick={handleClose}
			>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						{/* <CardMedia
							component='img'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							alt='green iguana'
						/> */}
						<CardContent></CardContent>
					</CardActionArea>
				</Card>
			</Backdrop>
		</div>
	)
}
