import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
	return <div className="container mx-auto py-8 px-4">{children}</div>
}
