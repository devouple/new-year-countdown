import getYear from 'date-fns/getYear'
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds'

const nextYear = getYear(new Date()) + 1

export const getRemainingSeconds = () => {
	return Math.ceil(
		differenceInMilliseconds(new Date(nextYear, 0, 1), new Date()) / 1000
	)
}
