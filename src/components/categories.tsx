import {
	AppleIcon,
	DiamondIcon,
	DogIcon,
	EarthIcon,
	FlagIcon,
	LightbulbIcon,
	SmileIcon,
	VolleyballIcon,
} from 'lucide-react'
import { useStore } from '../contexts/store-provider'

const iconsMap = {
	faces: SmileIcon,
	'animals-nature': DogIcon,
	'food-drink': AppleIcon,
	activities: VolleyballIcon,
	'travel-places': EarthIcon,
	objects: LightbulbIcon,
	symbols: DiamondIcon,
	flags: FlagIcon,
}

export function Categories() {
	const { categories } = useStore()

	return (
		<nav className="mt-6 flex items-center gap-3 overflow-x-auto">
			{categories.map((category) => {
				const Icon = iconsMap[category.id as keyof typeof iconsMap]

				return (
					<a
						key={category.id}
						className="flex items-center gap-2 py-1.5 px-4 border border-gray-200 rounded-full text-nowrap text-sm text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-colors"
						// biome-ignore lint/a11y/useValidAnchor: placeholder href
						href="#"
					>
						<Icon className="size-4" />
						{category.name}
					</a>
				)
			})}
		</nav>
	)
}
