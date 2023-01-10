import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='*' element={<h1>Não Encontrado</h1>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
