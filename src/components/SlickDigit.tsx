import { FC, memo } from 'react'
import styled from 'styled-components'
import { usePrevious } from '../hooks/usePrevious'
import { fade, rollIn } from '../lib/animations'
import { Typography } from './Typography'

interface SlickDigitProps {
	digit: string
}

const Digit: FC<{ className?: string }> = ({ className, children }) => {
	return (
		<DigitContainer>
			<DigitShadow font="Mitr" size="64px" className={className}>
				{children}
			</DigitShadow>
			<DigitValue font="Mitr" size="64px">
				{children}
			</DigitValue>
		</DigitContainer>
	)
}

const DigitContainer = styled.div`
	position: relative;
`

const DigitShadow = styled(Typography)`
	position: absolute;
	left: 0px;
	top: 2px;
	color: #ea3223;
	-webkit-text-stroke: 8px #ea3223;
`

const DigitValue = styled(Typography)`
	position: relative;
`

export const SlickDigit = memo(({ digit }: SlickDigitProps) => {
	const prevState = usePrevious(digit)

	return (
		<Container key={digit + Math.random()}>
			<Next>
				<Digit className="timer_value">{digit}</Digit>
			</Next>

			<Prev>
				<Digit>{prevState}</Digit>
			</Prev>
		</Container>
	)
})

const Container = styled.div`
	position: relative;
	z-index: -1;
	animation: ${rollIn} 0.5s ease-in-out forwards;
`

const Next = styled.div`
	animation: ${fade} 0.5s ease-in-out forwards;
`

const Prev = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(100%);
	animation: ${fade} 0.5s ease-in-out reverse forwards;
`
