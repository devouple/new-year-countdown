import getYear from 'date-fns/getYear'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fireworks } from './Fireworks'
import { Typography } from './Typography'

export const HappyNewYear = () => {
	const [year, setYear] = useState(getYear(new Date()))

	useEffect(() => {
		setInterval(() => {
			setYear(getYear(new Date()))
		}, 1000)
	}, [])

	return (
		<>
			<Fireworks />
			<Container>
				<Typography font="Yellowtail">Happy</Typography>
				<YearContainer>
					<YearShadow font="BlackHanSans" size="96px">
						{year}
					</YearShadow>
					<Year font="BlackHanSans" size="96px">
						{year}
					</Year>
				</YearContainer>
				<Typography font="BlackHanSans" size="24px">
					NEW YEAR
				</Typography>
			</Container>
		</>
	)
}

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
`

const YearContainer = styled.div`
	position: relative;
`

const Year = styled(Typography)`
	position: relative;
`

const YearShadow = styled(Typography)`
	position: absolute;
	left: 0px;
	top: 2px;
	color: #ea3223;
	-webkit-text-stroke: 8px #ea3223;
`
