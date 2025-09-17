import type { EmojiCategory } from '../data/categories'

type buildTabsParams = {
	data: EmojiCategory[]
	currentCategory: string
}

export const buildTabs = ({ data, currentCategory }: buildTabsParams) => {
	const tabs = data.map((category) => ({
		id: category.id,
		label: category.name,
		active: category.id === currentCategory,
	}))

	return tabs
}
