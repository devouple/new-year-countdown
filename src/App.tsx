import getMonth from 'date-fns/getMonth'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { HappyNewYear } from './components/HappyNewYear'
import { SlickDigit } from './components/SlickDigit'
import { Typography } from './components/Typography'
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
				<HappyNewYear />
			) : (
				<>
					<TitleContainer>
						<Box>
							<Typography font="Lobster" size="36px">
								New Year
							</Typography>
							<Typography font="BlackHanSans" size="18px">
								countdown
							</Typography>
						</Box>
					</TitleContainer>
					<CountDownContainer>
						{state
							.toString()
							.split('')
							.map((digit, idx, arr) => (
								<SlickDigit key={arr.length - idx} digit={digit} />
							))}
					</CountDownContainer>
				</>
			)}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
`

const CountDownContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: transform 0.2s;
`

const TitleContainer = styled.div`
	::before {
		width: 300px;
		height: 1px;
		background-color: white;
		content: '';
		position: absolute;
		top: 50%;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 64px;
	position: relative;
`

const Box = styled.div`
	background-color: #11213d;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`

export default App
