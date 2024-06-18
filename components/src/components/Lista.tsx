interface ListaProps {
	title?: string
	itens: string[]
}

export function Lista({ title, itens }: ListaProps): JSX.Element {
	return (
		<>
			<h1>{title ? title : "Lista"}</h1>
			<ul>
				{itens.map(item => {
					return (
						<li key={item}>{item}</li>
					)
				})}
			</ul>
		</>
	)
}