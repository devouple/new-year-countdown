import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

export const Fireworks = () => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!ref.current) {
			return
		}
		lottie.loadAnimation({
			container: ref.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../assets/lottie/fireworks.json'),
		})
	}, [])

	return <Wrapper ref={ref} />
}

const Wrapper = styled.div`
	width: 100%;
	position: absolute;
`
