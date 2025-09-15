import { Categories } from './components/categories'
import { Container } from './components/container'
import { Header } from './components/header'
import Search from './components/search'
import { StoreProvider } from './contexts/store-provider'

export function App() {
	return (
		<StoreProvider>
			<Container>
				<Header />
				<Search />
				<Categories />
			</Container>
		</StoreProvider>
	)
}
