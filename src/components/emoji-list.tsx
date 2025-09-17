import type { EmojiItem } from '../data/categories'
import { EmojiListItem } from './emoji-list-item'

export function EmojiList({ data }: { data: EmojiItem[] }) {
	return (
		<div className="mt-6 flex flex-wrap items-center gap-3">
			{data.map((item) => (
				<EmojiListItem key={item.name} item={item} />
			))}
		</div>
	)
}
