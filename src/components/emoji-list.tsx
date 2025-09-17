import type { EmojiItem } from '../data/categories'

export function EmojiList({ data }: { data: EmojiItem[] }) {
	return (
		<div className="mt-6 flex flex-wrap items-center gap-3">
			{data.map((item) => (
				<button
					className="text-2xl p-2 border border-gray-200 rounded-lg hover:scale-110 hover:border-gray-300 transition-all duration-100 cursor-pointer"
					type="button"
					key={item.name}
					title={item.name}
				>
					{item.emoji}
				</button>
			))}
		</div>
	)
}
