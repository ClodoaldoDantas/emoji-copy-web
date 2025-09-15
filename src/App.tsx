import { Container } from './components/container'
import { Header } from './components/header'
import { StoreProvider } from './contexts/store-provider'

export function App() {
	return (
		<StoreProvider>
			<Container>
				<Header />
			</Container>
		</StoreProvider>
	)
}
