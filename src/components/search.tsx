import { SearchIcon } from 'lucide-react'

export default function Search() {
	return (
		<form className="relative mt-4">
			<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none size-5" />
			<input
				type="search"
				placeholder="Buscar..."
				className="w-full pl-10 pr-4 py-1.5 border-1 border-gray-200 rounded-full bg-white transition-all duration-200 ease-in-out outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-400"
			/>
		</form>
	)
}
