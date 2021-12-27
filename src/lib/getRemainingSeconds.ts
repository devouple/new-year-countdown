import getYear from 'date-fns/getYear'
import differenceInSeconds from 'date-fns/differenceInSeconds'

const nextYear = getYear(new Date()) + 1

export const getRemainingSeconds = () => {
	return differenceInSeconds(new Date(nextYear, 0, 1), new Date())
}
