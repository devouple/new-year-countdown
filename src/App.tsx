import { useEffect, useState } from 'react'
import { Digit } from './components/Digit'

function App() {
	const [state, setState] = useState(0)

	useEffect(() => {
		setInterval(() => {
			setState((prev) => prev + 1)
		}, 1000)
	}, [])

	return (
		<div>
			<Digit digit={state} />
		</div>
	)
}

export default App
