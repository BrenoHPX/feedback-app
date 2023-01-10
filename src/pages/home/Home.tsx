import { useState, useEffect } from 'react'
import SimpleAccordion from '../../components/accordion/SimpleAccordion'
import Header from '../../components/header/Header'
import axios from 'axios'

const Home: React.FC = () => {
	useEffect(() => {
		getArray()
	}, [])

	const getArray = async () => {
		try {
			const response = await axios.get(
				'https://sheets.googleapis.com/v4/spreadsheets/1hj9N8lW2oiNfSHPNkmJZJGHiWxWm3ECDVoeDrv3W2eQ/values:batchGet?key=AIzaSyBsqkJsATIOzmpWCJ8mUyLTV5YS9m4djcQ&ranges=A2:E20000'
			)
			const valoresBrutos: [] = response.data.valueRanges[0].values

			const dataBaseGoogle: object[] = valoresBrutos.map(
				(valor: object) => {
					return {
						nomeColaborador: valor[0],
						nomeAvaliador: valor[1],
						qualidade1: valor[2],
						qualidade2: valor[3],
						qualidade3: valor[4]
					}
				}
			)
			respostas = dataBaseGoogle
		} catch (error) {
			console.log('error ', error)
		}
	}
	return (
		<>
			<Header titulo='Feedbacks App'></Header>
			<SimpleAccordion avaliacoes={respostas!}></SimpleAccordion>
		</>
	)
}
export default Home
