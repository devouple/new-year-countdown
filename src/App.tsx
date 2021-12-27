import getMonth from 'date-fns/getMonth'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Digit } from './components/Digit'
import { Fireworks } from './components/Fireworks'
import { getRemainingSeconds } from './lib/getRemainingSeconds'

function App() {
	const [state, setState] = useState(getRemainingSeconds())
	const [isDone, setIsDone] = useState(getMonth(new Date()) === 1)
	const ref = useRef<NodeJS.Timer | null>(null)

	useEffect(() => {
		ref.current = setInterval(() => {
			const remainingSeconds = getRemainingSeconds()
			if (remainingSeconds < 1) {
				setIsDone(true)
			}
			setState(getRemainingSeconds())
		}, 100)
	}, [])

	useEffect(() => {
		if (isDone && ref.current) {
			clearInterval(ref.current)
		}
	}, [isDone])

	return (
		<Container>
			{isDone ? (
				<Fireworks />
			) : (
				<CountDownContainer>
					{state
						.toString()
						.split('')
						.map((digit, idx, arr) => (
							<Digit key={arr.length - idx} digit={digit} />
						))}
				</CountDownContainer>
			)}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`

const CountDownContainer = styled.div`
	display: flex;
`

export default App
