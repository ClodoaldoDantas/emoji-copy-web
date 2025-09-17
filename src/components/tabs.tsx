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
import { useSearchParams } from 'react-router'

const iconsMap = {
	all: SmileIcon,
	faces: SmileIcon,
	'animals-nature': DogIcon,
	'food-drink': AppleIcon,
	activities: VolleyballIcon,
	'travel-places': EarthIcon,
	objects: LightbulbIcon,
	symbols: DiamondIcon,
	flags: FlagIcon,
}

type TabsProps = {
	data: { id: string; label: string; active: boolean }[]
}

export function Tabs({ data }: TabsProps) {
	const [, setSearchParams] = useSearchParams()

	const handleTabClick = (tabId: string) => {
		setSearchParams((state) => {
			state.set('category', tabId)
			return state
		})
	}

	return (
		<nav className="mt-6 flex items-center gap-3 overflow-x-auto">
			{data.map((tab) => {
				const Icon = iconsMap[tab.id as keyof typeof iconsMap]

				return (
					<button
						type="button"
						key={tab.id}
						onClick={() => handleTabClick(tab.id)}
						className={`cursor-pointer flex items-center gap-2 py-1.5 px-4 border border-gray-200 rounded-full text-nowrap text-sm text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-colors ${
							tab.active ? 'bg-violet-600 text-white border-violet-600' : ''
						}`}
					>
						<Icon className="size-4" />
						{tab.label}
					</button>
				)
			})}
		</nav>
	)
}
