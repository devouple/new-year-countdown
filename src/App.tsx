import { Typography } from './components/Typography'

function App() {
	return (
		<div>
			<Typography font="BlackHanSans" size="64px">
				01234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
			</Typography>
			<br />
			<Typography font="Lobster" size="64px">
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
			</Typography>
			<br />
			<Typography font="Mitr" size="64px">
				01234567890,
			</Typography>
			<br />
			<Typography font="Yellowtail" size="64px">
				ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
			</Typography>
		</div>
	)
}

export default App
