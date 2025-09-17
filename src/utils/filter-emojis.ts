import type { EmojiCategory } from '../data/categories'

type buildTabsParams = {
	data: EmojiCategory[]
	currentSearch: string
	currentCategory: string
}

export const filterEmojis = ({
	data,
	currentSearch,
	currentCategory,
}: buildTabsParams) => {
	if (currentSearch) {
		const term = currentSearch.toLowerCase()
		return data
			.flatMap(({ emojis }) => emojis)
			.filter(({ name, keywords }) => {
				return (
					name.toLowerCase().includes(term) ||
					keywords.some((k) => k.toLowerCase().includes(term))
				)
			})
	}

	return data.find(({ id }) => id === currentCategory)?.emojis || []
}
