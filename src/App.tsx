import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Digit } from './components/Digit'
import { getRemainingSeconds } from './lib/getRemainingSeconds'

function App() {
	const [state, setState] = useState(getRemainingSeconds())

	useEffect(() => {
		setInterval(() => {
			setState(getRemainingSeconds())
		}, 100)
	}, [])

	return (
		<div>
			<Container>
				{state
					.toString()
					.split('')
						.map((digit, idx, arr) => (
							<Digit key={arr.length - idx} digit={digit} />
					))}
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
`

export default App
