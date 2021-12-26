import { FC } from 'react'
import styled from 'styled-components'

interface TypographyProps {
	font: 'Mitr' | 'Lobster' | 'Yellowtail' | 'BlackHanSans'
	weight?: 'bold' | 'regular'
	size?: string
	color?: string
	className?: string
}

export const Typography: FC<TypographyProps> = ({
	children,
	font,
	weight,
	size,
	color,
	className,
}) => {
	return (
		<Text
			font={font}
			weight={weight}
			className={className}
			size={size}
			color={color}
		>
			{children}
		</Text>
	)
}

const Text = styled.span<{
	font: string
	weight?: string
	size?: string
	color?: string
}>`
	font-family: ${(props) => props.font}, -apple-system, BlinkMacSystemFont,
		'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
	font-weight: ${(props) => props.weight};
	font-size: ${(props) => props.size};
	color: ${(props) => props.color};
`
