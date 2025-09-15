import { HandMetalIcon } from 'lucide-react'

export function Header() {
	return (
		<header>
			<div className="flex items-center gap-2">
				<HandMetalIcon className="size-7 text-violet-600" />
				<h1 className="text-2xl font-bold text-zinc-900">Emoji Copy</h1>
			</div>

			<p className="leading-relaxed text-zinc-600">
				um site simples e elegante que permite copiar emojis para a área de
				transferência de forma rápida e intuitiva.
			</p>
		</header>
	)
}
