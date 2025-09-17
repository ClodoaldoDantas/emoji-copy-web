import { SearchIcon } from 'lucide-react'
import { useSearchParams } from 'react-router'

export function Search() {
	const [searchParams, setSearchParams] = useSearchParams()

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const query = formData.get('search')?.toString().trim()

		setSearchParams((state) => {
			if (query) {
				state.delete('category')
				state.set('search', query)
			} else {
				state.delete('search')
			}

			return state
		})
	}

	return (
		<form onSubmit={handleSearch} className="relative mt-4">
			<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none size-5" />
			<input
				defaultValue={searchParams.get('search') ?? ''}
				name="search"
				type="search"
				placeholder="Buscar..."
				className="w-full pl-10 pr-4 py-1.5 border-1 border-gray-200 rounded-full bg-white transition-all duration-200 ease-in-out outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
			/>
		</form>
	)
}
