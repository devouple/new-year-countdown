import { memo } from 'react'
import styled from 'styled-components'
import { usePrevious } from '../hooks/usePrevious'
import { fade, rollIn } from '../lib/animations'

interface DigitProps {
	digit: number
}

export const Digit = memo(({ digit }: DigitProps) => {
	const prevState = usePrevious(digit)

	return (
		<Container key={digit + Math.random()}>
			<Next>{digit}</Next>
			<Prev>{prevState}</Prev>
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
