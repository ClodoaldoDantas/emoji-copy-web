import { createContext, type ReactNode, useContext } from 'react'
import { emojiCategories } from '../data/categories'

type StoreContextData = {
	categories: {
		id: string
		name: string
		emojis: {
			emoji: string
			name: string
			keywords: string[]
		}[]
	}[]
}

const StoreContext = createContext({} as StoreContextData)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
	return (
		<StoreContext.Provider value={{ categories: emojiCategories }}>
			{children}
		</StoreContext.Provider>
	)
}

export const useStore = () => useContext(StoreContext)
