import getYear from 'date-fns/getYear'
import differenceInSeconds from 'date-fns/differenceInSeconds'

export const getRemainingSeconds = () => {
	const nextYear = getYear(new Date()) + 1
	return differenceInSeconds(new Date(nextYear, 0, 1), new Date())
}
