import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { Container } from '../../components/container'
import { EmojiList } from '../../components/emoji-list'
import { Header } from '../../components/header'
import { Search } from '../../components/search'
import { Tabs } from '../../components/tabs'
import { emojiCategories } from '../../data/categories'
import { buildTabs } from '../../utils/build-tabs'
import { filterEmojis } from '../../utils/filter-emojis'

export function HomePage() {
	const [searchParams] = useSearchParams()

	const currentSearch = searchParams.get('search') ?? ''
	const currentCategory = searchParams.get('category') ?? emojiCategories[0].id

	const tabs = buildTabs({
		data: emojiCategories,
		currentCategory,
	})

	const filteredEmojis = useMemo(() => {
		return filterEmojis({
			data: emojiCategories,
			currentSearch,
			currentCategory,
		})
	}, [currentSearch, currentCategory])

	return (
		<Container>
			<Header />
			<Search />

			{currentSearch ? (
				<p className="mt-4 text-base text-gray-500">
					Resultados para "{currentSearch}"
				</p>
			) : (
				<Tabs data={tabs} />
			)}

			<EmojiList data={filteredEmojis} />
		</Container>
	)
}
