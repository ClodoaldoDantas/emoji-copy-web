import { toast } from 'sonner'
import type { EmojiItem } from '../data/categories'

export function EmojiListItem({ item }: { item: EmojiItem }) {
	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(item.emoji)
			toast.success(`Emoji ${item.emoji} copiado!`)
		} catch (error) {
			console.error('Failed to copy emoji:', error)
			toast.error('Falha ao copiar o emoji.')
		}
	}

	return (
		<button
			onClick={handleClick}
			className="text-2xl p-2 border border-gray-200 rounded-lg hover:scale-110 hover:border-gray-300 transition-all duration-100 cursor-pointer"
			type="button"
			key={item.name}
			title={item.name}
		>
			{item.emoji}
		</button>
	)
}
