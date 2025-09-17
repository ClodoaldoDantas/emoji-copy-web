import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/home/page'

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}
