import { BrowserRouter, Route, Routes } from 'react-router'
import { Toaster } from 'sonner'
import { HomePage } from './pages/home/page'

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Toaster richColors position="top-right" />
		</BrowserRouter>
	)
}
