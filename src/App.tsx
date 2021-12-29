import getMonth from 'date-fns/getMonth'
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { HappyNewYear } from './components/HappyNewYear'
import { SlickDigit } from './components/SlickDigit'
import { Typography } from './components/Typography'
import { getRemainingSeconds } from './lib/getRemainingSeconds'

function App() {
	const [remainingSeconds, setRemainingSeconds] = useState(
		getRemainingSeconds()
	)
	const [isDone, setIsDone] = useState(getMonth(new Date()) === 1)
	const [width, setWidth] = useState<number>()

	const innerRef = useRef<HTMLDivElement>(null)
	const intervalRef = useRef<NodeJS.Timer | null>(null)

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			const remainingSeconds = getRemainingSeconds()
			if (remainingSeconds < 1) {
				setIsDone(true)
			}
			setRemainingSeconds(getRemainingSeconds())
		}, 100)
	}, [])

	useEffect(() => {
		if (isDone && intervalRef.current) {
			clearInterval(intervalRef.current)
		}
	}, [isDone])

	useEffect(() => {
		if (!innerRef.current) {
			return
		}

		setWidth(innerRef.current.offsetWidth)
	}, [remainingSeconds])

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
					<CountDownContainer
						style={{
							width,
						}}
					>
						<CountDownInner ref={innerRef}>
							{remainingSeconds
								.toString()
								.split('')
								.map((digit, idx, arr) => (
									<SlickDigit key={arr.length - idx} digit={digit} />
								))}
						</CountDownInner>
					</CountDownContainer>
				</>
			)}
		</Container>
	)
}

const Container = styled.div`
	height: calc(100vh - 64px);
`

const CountDownContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: width 0.2s;
`

const CountDownInner = styled.div`
	display: flex;
	width: fit-content;
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
